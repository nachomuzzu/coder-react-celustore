import { Row, Col, Container } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='p-5 d-block justify-content-start text-white' id="bgFooter">
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <h2>Sobre nosotros</h2>
                        <div className="nosotros">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta nostrum atque nisi, autem est suscipit sapiente deleniti aspernatur eum cupiditate error.</div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="d-block justify-content-center">
                        <h2>Seguinos en nuestras redes sociales</h2>
                        <div className="redes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta nostrum atque nisi, autem est suscipit sapiente deleniti aspernatur eum cupiditate error.</div>
                    </Col>
                    </Row>
            </div>
            <div className="bgCopyright d-flex justify-content-center" id="footerContainer">Copyright CeluStore</div>
        </>
    );
}

export default Footer;