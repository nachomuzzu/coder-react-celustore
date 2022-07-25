import { Col, Container, Row } from 'react-bootstrap';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState } from 'react';

const ItemDetail = ({ item }) => {
    const [amount, setAmount] = useState(0);
    const onAdd = (amount) => {
        setAmount(amount);
    }
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
                                <h6 className='text-muted stock mt-5'>¡Quedan {item.stock} unidades!</h6>
                                <ItemCount items={item} initial={0} onAdd={onAdd} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;