import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import itemsData from "../../data/itemsData"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {

  //Guardar datos en un estado 
  const [items, setItems] = useState([]);

  //Crear promesa que retorne los datos

  useEffect(() => {
    let promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsData);
        reject("Ha ocurrido un error");
      }, 2000);
    })

    promiseItems.then(
      (respuesta) => {
        setItems(itemsData);
      }
    ).catch((error) => {
      console.error(error);
    })
  },
    []
  )

  return (
    <>
      <div className='itemListcontainer'>
        <ItemList items={items} />
      </div>
    </>)
};
export default ItemListContainer;
