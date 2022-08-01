import Data from "../../data/itemsData"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

 const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(Data), 2000);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(Data.filter((data) => data.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  if (loading) return <div className='mb-5 spinner d-flex justify-content-center' >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>;

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;