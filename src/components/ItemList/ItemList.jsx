import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./ItemList.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const onAddItem = (count) => {
    if (count == 1) {
        alert("¡1 item será añadido al carrito!")
    }
    else {
        alert(`¡${count} items serán añadidos al carrito!`);
    }
}
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
                                        <br></br>
                                    </Card.Body>
                                    <Link to={`/item/${items.id}`} style={{ textDecoration: "none" }}>
                                        <button
                                            className="verMas btn btnClaro mb-2"
                                            type="button"
                                        >
                                            Ver más
                                        </button>
                                    </Link>
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