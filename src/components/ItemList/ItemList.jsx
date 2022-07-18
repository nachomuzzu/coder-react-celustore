import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./ItemList.css";

function ItemList(props) {
    return (
        <>
            <div id="productos">
                <h1 className="text-center p-3">Catálogo</h1>
                <Container className="itemContainer">
                    <Row>
                        {props.items.map((items, k) => (
                            <Col key={k} xs={12} md={4} lg={4}>
                                <Card className="mb-3 text-center card">
                                    <Card.Img src={items.productImage} />
                                    <Card.Body>
                                        <Card.Title>{items.productName}</Card.Title>
                                        <Card.Text>${items.price}</Card.Text>
                                        <Button className="btn-bg btn-light text-dark">Ver más</Button>
                                        <br></br>
                                        <Button className="btn-dark mt-3">Agregar al carrito</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Stock {items.stock}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default ItemList;