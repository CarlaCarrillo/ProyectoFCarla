import React, { Component } from 'react';
//Aqui importamos nuestra imagen
import imgfondo from './imgfondo.jpg';
import './PaginaPrincipal.css';
import Container from 'react-bootstrap/Container';

class Fondopantalla extends Component {
  render() {
    return (
      <div id="contenedor"className="imgfondo">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img className="imgfondo2" src={imgfondo} />
        <div id= "textoencima2" className="texto">
        </div>
        <div id="centrado2" className="texto encima">
          <Container id="titulo2">
          <h8 className="Plantae2">Plantae</h8  >
          </Container>
          <Container id="contenido2">
          <h7>Para los amantes de las plantas, aquí encontrarás 
          macetas con
           diseños únicos para regalar a esas personas especiales en tu vida.
          También podrás encontrar todo lo necesario para comenzar tu propio huerto urbano.</h7>
          </Container>
        </div>
      </div>
    );
  }
}

export default Fondopantalla;