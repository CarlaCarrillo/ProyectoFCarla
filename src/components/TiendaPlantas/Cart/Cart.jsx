import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => ( 

    
<Row>
    <Col sm>
    <Card id="carta" style={{ width: '14rem' }}>
    <Card.Img variant="top"  />
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

);

export default Cart;