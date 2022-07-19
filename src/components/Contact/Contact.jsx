import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'
import { Row, Col, Container } from "react-bootstrap";


const Contact = () => {
    return (<>
        <Container className='p-5' id='contacto'>
            <Row>
                <h2 className='d-flex justify-content-center'>¡Recibí las últimas ofertas!</h2>
                <Col xs={12} md={12} lg={12}>
                <Form id="contactContainer">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa email" />
                        <Form.Text className="text-muted">
                            No compartiremos tu email con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese nombre" />
                    </Form.Group>
                    <Button variant="dark" type="submit" className='mb-3'>
                        Enviar
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Contact;