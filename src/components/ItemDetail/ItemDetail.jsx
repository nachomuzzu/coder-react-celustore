import { Button, Col, Container, Row } from 'react-bootstrap';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = ({ item, onAddItem }) => {

    return (
        <>
            <Container className='details p-5'>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <div className="bgContainer pb-5" style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}>
                            <div className="infoContainer">
                                <img className="justify-content-center" src={item.productImage} />
                            </div>

                            <div className='detailContainer'>
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
                                <ItemCount items={item} stock={item.stock} initial={0} onAdd={onAddItem} />
                                <h5 className='text-muted stock'>¡Quedan {item.stock} unidades!</h5>
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