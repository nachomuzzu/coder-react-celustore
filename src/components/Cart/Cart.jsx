import React, { useContext, useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { GContext } from './CartContext';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";

const Cart = () => {
    const { cartItems, removeItem, clear, total, sendOrder } = useContext(GContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
        console.log(data)
    }

    useEffect(() => {
        let total = 0;
        cartItems.forEach(({ item, quantity }) => {
            total += parseInt(item.price) * quantity;
        });
        setTotalPrice(total);
    }, [cartItems]);

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

                    <h2 className="ms-5">{`El total de su compra es de: $${totalPrice}`}</h2>


                    <Button className="mt-5 btn-dark d-flex justify-content-end" style={{ marginLeft: "80%" }} onClick={() => clear()}>
                        Vaciar Carrito
                    </Button>

                <Container className='p-5 mt-3 d-flex justify-content-center' style={{backgroundColor: '#f7f7f7'}}>
                    <h3 className="d-flex justify-content-center">Datos de contacto</h3>
                <form  className='ms-5' onSubmit={handleSubmit}>
                        Nombre <input type='text' className='ms-1 mb-2'  /> <br></br>
                        Email <input type='email' className='ms-4 mb-2' /> <br></br>
                        Teléfono <input type='tel' className="ms-1" /> <br></br>
                        <button
                            type="submit" className="btn mt-2 btn-success d-flex justify-content-end mb-3" style={{ marginLeft: "80%" }}
                        >
                            Enviar orden
                        </button>
                    </form>
                </Container>
                   

                </>
            )}
        </>
    );

}

export default Cart;
