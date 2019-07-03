import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Fondopantalla from './Fondopantalla';
import './PaginaPrincipal.css';

class PaginaPrincipal extends Component {
  render() {
    return (

      

        <Row>
          <Col xs={12}>
            <Fondopantalla />
          </Col>
        </Row>
   
    );
  }
}

export default PaginaPrincipal;