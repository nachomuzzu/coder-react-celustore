import React from "react";
import { Container, Button } from 'react-bootstrap';

const CartItem = ({ item, quantity, removeItem, clear }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center mb-5 " style={{marginTop: "3em", padding: "2em", backgroundColor: "#f7f7f7" }}>
            <div className="d-flex mb-5 justify-content-cemter">
                <div className="d-flex mt-5 justify-content-between" style={{ marginRight: "10em" }}>
                    <span className="ms-5">{item.productName}</span> 
                    <span className="ms-5">{item.price}</span> 
                    <span className="ms-5">{quantity}</span>
                </div>
            <Button className="mt-5 justify-content-end ms-3 btn-danger" onClick={() => removeItem(item.id)}>
                Eliminar
            </Button>
            
            </div>
        </Container>   
    );
};

export default CartItem;