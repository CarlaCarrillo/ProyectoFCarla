import React from 'react';

//Action

//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Slideone from './Gallery/Slideone.jpg'
import Planta1 from './Gallery/Planta1.jpg'
import Planta2 from './Gallery/Planta2.jpg'
import Planta3 from './Gallery/Planta3.jpg'


import './TiendaPlantas.css';

const TiendaPlantas = () => ( 
   
   <div className="TiendaPlantas">
    <Container id ="carrusel">
        <Row className="justify-content-md-center">
            <Col xs lg="2">
            1 of 3
            </Col>
            
            <Col md="auto">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col xs lg="2">
                3 of 3
            </Col>
        </Row>
        </Container>
        <Container>
        <Row  className="justify-content-md-center">
            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta1} />
                <Card.Body>
                    <Card.Title>Árbol de limones</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>
            
            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta2} />
                <Card.Body>
                    <Card.Title>Planta de menta</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>
            
            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta3} />
                <Card.Body>
                    <Card.Title>Planta</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta3} />
                <Card.Body>
                    <Card.Title>Planta</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta3} />
                <Card.Body>
                    <Card.Title>Planta</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col sm>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Planta3} />
                <Card.Body>
                    <Card.Title>Planta</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>

        </Row>
    </Container>
   
    </div>
);
// <UserArea loggedIn/>
export default TiendaPlantas;