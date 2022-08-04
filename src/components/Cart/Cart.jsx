import React, { useContext } from "react";
import { Button } from 'react-bootstrap'
import { GContext } from './CartContext';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems, removeItem, clear, total } = useContext(GContext);
    const tot = total();
    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className="d-flex justify-content-center" style={{ marginTop: "15%" }}>No hay items! Agrega algunos
                        <Link to="/"><Button className="btn-dark ms-3">Volver</Button></Link>
                    </div>
                </>
            ) : (
                <>
                    {cartItems.map((element) => (
                        <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
                    ))}
                    <Button className="mt-5 btn-dark d-flex justify-content-end" style={{ marginLeft: "80%" }} onClick={() => clear()}>
                        Vaciar Carrito
                    </Button>
                    <h2 className="ms-5">El total de la compra es: {tot}</h2>
                </>
            )}
        </>
    );

}

export default Cart;