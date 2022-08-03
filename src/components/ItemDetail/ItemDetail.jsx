import { Col, Container, Row, Button } from 'react-bootstrap';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState, useContext, useNavigate } from 'react';
import { GContext } from '../Cart/CartContext';


const ItemDetail = ({ item }) => {
    
    const [amount, setAmount] = useState(0);
    const {addItem} = useContext(GContext);
    const onAdd = (amount) => {
        setAmount(amount);
        addItem(item, amount)
    }

    console.log(addItem)
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
                                {amount === 0 ? (
                  <ItemCount items={item} onAdd={onAdd} />
                ) : (
                    <div>
                        <h2>¡{amount} item(s) han sido añadidos al carrito!</h2>
                    <Link to={`/cart`} style={{textDecoration: "none"}}>
                    <Button 
                            type="button"
                            className="ms-3 mt-2 btn btn-dark "
                        >
                            Ir al carrito
                        </Button>
                        </Link>
                        <Link to={`/#productos`} style={{textDecoration: "none"}}>
                    <Button 
                            type="button"
                            className="ms-3 mt-2 btn btn-light "
                        >
                            Seguir comprando
                        </Button>
                        </Link>
                        </div>
                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;