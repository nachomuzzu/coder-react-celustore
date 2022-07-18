import { useState, useEffect } from 'react';

function ItemListContainer(props) {

    //Guardar datos en un estado 
    const [items, setItems] = useState([]);
  
    //Crear promesa que retorne los datos
  
    useEffect(() => {
      let promiseItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
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
}