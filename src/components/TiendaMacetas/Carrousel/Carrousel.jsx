import React from 'react';

//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Slideone from '../Gallery/Slideone.jpg';


const Carrousel = () => ( 

    <div className="TiendaPlantas">
 
 <Container id ="carrusel">
       
        <Row className="justify-content-md-center" >
            <Col xs lg="2">
            
            </Col>

            <Col md="auto">
                <Carousel className="Carrusel">
                <Carousel.Item  >
                    <img
                    className="d-block w-100"
                    src={Slideone}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    <Container id="titulo">
                    <h1 className="basecarrousel">Encuentra algo especial para regalar</h1>
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
                    <h3></h3>
                    <p></p>
                    <Container id="titulo">
                    <h1 className="basecarrousel">Encuentra todo para crear tu huerto urbano</h1>
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
                    <h3></h3>
                    <p></p>
                    <Container id="titulo">
                    <h1 className="basecarrousel">Si ya lo tienes, encontrarás todo para su mantenimiento.</h1>
                    </Container>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
           
            <Col xs lg="2">
                
            </Col>
                
        </Row>
     
     </Container>
 
     </div>

);

export default Carrousel;