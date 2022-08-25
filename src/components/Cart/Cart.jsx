import React, { useContext, useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { GContext } from './CartContext';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import { Row, Col, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./Cart.css"

const Cart = (amount) => {
    const { cartItems, removeItem, clear, sendOrder } = useContext(GContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showIdCompra, setIdCompra] = useState(false);

    const onClick = () => setIdCompra(true)
    console.log(sendOrder.respuesta)
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
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

                    <Button className="mt-5 mb-5 btn-dark d-flex justify-content-end" style={{ marginLeft: "80%" }} onClick={() => clear()}>
                        Vaciar Carrito
                    </Button>

                    <Container className='p-5' id='contacto' style={{ backgroundColor: '#f7f7f7' }}>
            <Row>
                <h2 className='d-flex justify-content-center'>Ingrese sus datos de contacto para finalizar la compra</h2>
                <Col xs={12} md={12} lg={12}>
                    <Form onSubmit={handleSubmit} id="contactContainer">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nombre y apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" />
                            <Form.Text className="text-muted">
                                No compartiremos tu email con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email nuevamente" />
                            <Form.Text className="text-muted">
                                No compartiremos tu email con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control type="tel" placeholder="Ingrese teléfono" />
                        </Form.Group>
                        <Button variant="dark" type="submit" className='mb-3'>
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
                </>
            )}
        </>
    );
}

export default Cart;
