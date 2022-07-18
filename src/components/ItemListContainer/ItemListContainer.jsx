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

  const onAddItem = (count) => {
    alert(`${count} items van a ser añadidos al carrito!`);
  }

  return (
    <>
      <div className='itemListcontainer'>
        <ItemList items={items} />
        <ItemCount stock={5} initial={0} onAdd={onAddItem} />

      </div>
    </>)
};
export default ItemListContainer;
