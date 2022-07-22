import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import itemsData from "../../data/itemsData"
import { Spinner } from 'react-bootstrap';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);


  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 2000)
  });

  useEffect(() => {
    setLoading(true);
    promise.then((response) => {
      const foundItem = response.find(item => item.id === Number(id))
      setItem(foundItem)
      setLoading(false);
    })
  }, [])

  if (loading) return <div className='spinner mb-5 d-flex justify-content-center' >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>;

  return (<ItemDetail item={item} />);
}

export default ItemDetailContainer;
