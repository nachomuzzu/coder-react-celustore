import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import itemsData from "../../data/itemsData"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.find((product) => product.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  if (loading) return <div className='mt-5 d-flex justify-content-center'><Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>;

  return (
    <>
      <div className='itemListcontainer'>
        <ItemList items={items} />
      </div>
    </>)
};
export default ItemListContainer;
