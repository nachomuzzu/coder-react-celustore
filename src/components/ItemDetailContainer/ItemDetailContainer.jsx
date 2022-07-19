import React, { useState, useEffect } from 'react';
import { resolvePath, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import itemsData from "../../data/itemsData"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 2000)
  });

  useEffect(() => {
    promise.then((response) => {
      const foundItem = response.find(item => item.id === Number(id))
      setItem(foundItem)
    })
  }, [])

  return (<ItemDetail item={item} />);
}

export default ItemDetailContainer;
