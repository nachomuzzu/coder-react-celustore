import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import itemsData from "../../data/itemsData"
import { Spinner } from 'react-bootstrap';
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 2000)
  });

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className='spinner d-flex justify-content-center' >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>;

  return (<ItemDetail item={item} />);
}

export default ItemDetailContainer;
