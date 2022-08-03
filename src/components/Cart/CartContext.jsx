import {createContext, useState} from 'react'
export const GContext = createContext()

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        setCartItems([...cartItems, {item, quantity}])
        const newItem = isInCart(item);
        if (newItem){
            quantity = quantity + newItem.quantity
            setCartItems(cartItems.splice(cartItems.findIndex ( element => element.item.id === item.id) , 1));
        }
    }

    const isInCart = (item) => {
        return cartItems.find(element=>element.item === item)
    }

    const clear = () => {
        setCartItems([]);
    }

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(element=>element.item.id !== itemId))
    }

    const total = () => {
        return cartItems.reduce(
          (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
          0
        );
      };

    return (<GContext.Provider value={{ cartItems , addItem, removeItem, clear, total }}>{children}</GContext.Provider>);
}

export default CartContext;