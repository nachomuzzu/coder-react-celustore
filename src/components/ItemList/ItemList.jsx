import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./ItemList.css";
import { Link } from "react-router-dom";
function ItemList(props) {
    return (
        <>
            <div id="productos">
                <h1 className="text-center p-3">Catálogo</h1>
                <div className="text-center mb-3">
                    <Link to="/category/apple"
                        className="me-2"
                        style={{ textDecoration: 'none' }}>
                        <button
                            className="btn btn-dark"> Apple</button>
                    </Link>
                    <Link to="/category/samsung"
                        className="me-2"
                        style={{ textDecoration: 'none' }}>
                        <button
                            className="btn btn-dark">Samsung </button>
                    </Link>
                    <Link to="/category/oppo"
                        className="me-2"
                        style={{ textDecoration: 'none' }}>
                        <button
                            className="btn btn-dark">Oppo</button>
                    </Link>
                    <Link to="/category/sony"
                        className="me-2"
                        style={{ textDecoration: 'none' }}>
                        <button
                            className="btn btn-dark">Sony</button>
                    </Link>
                </div>
                <Container className="itemContainer ">
                    <Row className="d-flex justify-content-center mb-5">
                        {props.items.map((items, k) => (
                            <Col key={k} xs={12} md={4} lg={4}>
                                <Card className=" mb-3 text-center card">
                                    <Card.Img src={items.productImage} />
                                    <Card.Body>
                                        <Card.Title>{items.productName}</Card.Title>
                                        <Card.Text>${items.price}</Card.Text>
                                    </Card.Body>
                                    <Link to={`/item/${items.id}`} style={{ textDecoration: "none" }}>
                                        <button
                                            className="verMas btn btn-dark mb-2"
                                            type="button"
                                        >
                                            Comprar
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