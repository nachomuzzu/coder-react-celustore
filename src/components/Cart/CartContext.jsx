import { createContext, useState } from 'react'
import { addDoc, collection, getFirestore, updateDoc, doc, writeBatch } from "firebase/firestore";
import swal from 'sweetalert';
export const GContext = createContext()

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);

    // Firestore 
    const sendOrder = async (totalPrice, buyerData) => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const order = {
            items: cartItems,
            total: totalPrice,
            buyer: buyerData,
            date: new Date()
        }
        if (cartItems.length !== 0) {
            const addResponse = await addDoc(orderCollection, order);
            swal({
                title: "¡Gracias por tu compra!",
                text: `tu ID de compra es: ${addResponse.id}`,
                icon: "success",
            });
        } else {
            swal(
                "La compra no se ha completado. No hay items en el stock"
            );
        }
    }

    const addItem = (item, quantity) => {
        setCartItems([...cartItems, { item, quantity }])
        const newItem = isInCart(item);
        if (newItem) {
            quantity = quantity + newItem.quantity
            setCartItems(cartItems.splice(cartItems.findIndex(element => element.item.id === item.id), 1));
        }
    }

    const isInCart = (item) => {
        return cartItems.find(element => element.item === item)
    }

    const clear = () => {
        setCartItems([]);
    }

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(element => element.item.id !== itemId))
    }

    return (<GContext.Provider value={{ cartItems, addItem, removeItem, clear, sendOrder }}>{children}</GContext.Provider>);
}

export default CartContext;