import React from 'react';

//Action
import Cart from './Cart/Cart';

//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Slideone from './Gallery/Slideone.jpg';
import Planta1 from './Gallery/Planta1.jpg';
import Planta2 from './Gallery/Planta2.jpg';
import Planta3 from './Gallery/Planta3.jpg';
import Planta4 from './Gallery/Planta4.jpg';
import Planta5 from './Gallery/Planta5.jpg';
import Planta6 from './Gallery/Planta6.jpg';
import Planta7 from './Gallery/Planta7.jpg';
import Planta8 from './Gallery/Planta8.jpg';

//iconos de pie de página
import Entrega from './Gallery/Entrega.png';
import Envio from './Gallery/Envio.png'
import Planta from './Gallery/Planta.png'
import Regalo from './Gallery/Regalo.png'


import './TiendaPlantas.css';

const TiendaPlantas = () => ( 
   
   <div className="TiendaPlantas">
<Cart/>
    <Container id ="carrusel">
        <Row className="justify-content-md-center" >
            <Col xs lg="2">
            1 of 3
            </Col>
            
            <Col md="auto">
                <Carousel>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Container id="titulo">
                    <h1>Encuentra algo especial para regalar</h1>
                    </Container>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Container id="titulo">
                    <h1>Encuentra todo para crear tu huerto urbano</h1>
                    </Container>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Container id="titulo">
                    <h1>Si ya lo tienes, encontrarás todo para su mantenimiento.</h1>
                    </Container>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Col>
                <Col xs lg="2">
                    3 of 3
                </Col>
        </Row>
        </Container>
    <>
        <Container id="tarjetas">
        <Row  className="justify-content-md-center">
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img  src={Planta1} />
                <Card.Body>
                    <Card.Title>Planta 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>
            
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img  src={Planta2} />
                <Card.Body>
                    <Card.Title>Planta 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>
            
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img  src={Planta3} />
                <Card.Body>
                    <Card.Title>Planta 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img src={Planta4} />
                <Card.Body>
                    <Card.Title>Planta 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Planta5} />
                <Card.Body>
                    <Card.Title>Planta 5</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Planta6} />
                <Card.Body>
                    <Card.Title>Planta 6</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Planta7} />
                <Card.Body>
                    <Card.Title>Planta 7</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={Planta8} />
                <Card.Body>
                    <Card.Title>Planta 8</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Agregar a carrito</Button>
                </Card.Body>
            </Card>
            </Col>

        </Row>
    </Container>

</>
<>
<Row id="cajaiconos">
                <Col sm>
                <input id="iconos" type="image" src={Planta} style={{ width: '8rem' }} ></input>
                <h6>Selecciona</h6>
                </Col>
                <Col sm>
                <input id="iconos" type="image" src={Regalo} style={{ width: '8rem' }} ></input>
                <h6>Acondicionamos</h6>
                </Col>
                <Col sm>
                <input id="iconos" type="image" src={Envio} style={{ width: '8rem' }} ></input>
                <h6>Envío rápido</h6>
                </Col>
                <Col sm>
                <input id="iconos" type="image" src={Entrega}  style={{ width: '8rem' }}></input>
                <h6>Entrega puntual</h6>
                </Col>
         </Row>
</>
       
    <Container>
        <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
        </Row>
    </Container>
   
    </div>
);
// <UserArea loggedIn/>
export default TiendaPlantas;