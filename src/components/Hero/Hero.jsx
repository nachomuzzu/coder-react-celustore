import Button from 'react-bootstrap/Button'
import { Card } from "react-bootstrap";
import './Hero.css'
import image from '../../assets/img/samsung.png'

const Hero = () => {
  return (
    <Card className="hero ">
      <div className="imgContainer">
      <Card.Img className="heroImg" variant="top" src={image} alt="Varios celulares Samsung" />
      </div>
      <Card.Body style={{backgroundColor: '#f8f8f8'}}>
        <Button variant="dark" href='#productos'>Ver catálogo</Button>
      </Card.Body>
    </Card>
  );
}

export default Hero;