import { Button, Col, Container, Row } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <>
            <Container className='p-5'>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <div className="d-flex p-5 " style={{ backgroundColor: "#f7f7f7", borderRadius: "10px", boxShadow: "3px, black" }}>
                            <img className="d-flex justify-content-center" src={item.productImage} />
                            <div className="infoContainer ps-5 mt-5">
                                <span className="mt-2">
                                    <h4>Modelo</h4> {item.productName}
                                </span>
                                <span className="mt-2">
                                    <h4>Procesador</h4> {item.processor}
                                </span>
                                <span className="mt-2">
                                    <h4>RAM</h4> {item.ram}
                                </span>
                                <span className="mt-2">
                                    <h4>Almacenamiento</h4> {item.storage}
                                </span>
                                <h3 className='price mt-4'>${item.price}</h3>
                                <Button className='btnContainer btn-dark'>Agregar al carrito</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;