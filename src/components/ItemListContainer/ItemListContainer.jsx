import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore, collection, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
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