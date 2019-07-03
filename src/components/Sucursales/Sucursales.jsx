import React from 'react';

//Component

import Huertos from '../Sucursales/Huertos.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


import './Sucursales.css';

const Sucursales = () => ( 

   
    <Container>
     <h1 className="TituloSucursales">SUCURSALES</h1>
      <Row>
      <Col className="Parrafo" xs={6}> SUCURSAL 1<p/>
        AV. JOSE MARIA CASTORENA 425 LOC. 2 P.B., CUAJIMALPA , CUAJIMALPA DE MORELOS , DF , C.P.05000
        (55)5812-0560<p/>
      
        SUCURSAL 2<p/>
        OCAMPO 93, CUAJIMALPA , CUAJIMALPA DE MORELOS , DF , C.P.05000
        (55)5912-1236<p/>
        
        
        </Col>
      <Col xs={6}><Image className="imagenPortada" src={Huertos}/></Col>
      </Row>
    </Container>
   
   
   
   
   
   
   
   
   
   

);

export default Sucursales;