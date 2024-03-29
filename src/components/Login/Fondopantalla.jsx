import React, { Component } from 'react';
//Aqui importamos nuestra imagen
import imgfondo from './imgfondo.jpg';
import './Login.css';
import Container from 'react-bootstrap/Container';

class Fondopantalla extends Component {
  render() {
    return (
      <div id="contenedor"className="imgfondo">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img id="imgfondo" src={imgfondo} />
        <div id= "textoencima" className="texto">
        </div>
        <div id="centrado" className="texto encima">
          <Container id="titulo">
          <h8 id="Plantae">Plantae</h8  >
          </Container>
          <Container id="contenido">
          <h7>Para los amantes de las plantas, aquí encontrarás 
          macetas con
           diseños únicos para regalar a esas personas especiales en tu vida.
          También podrás encontrar todo lo necesario para comenzar tu propio huerto urbano.<p/>
          Página elaborada por Carla Ivonne Carrillo Morales<p/>
          Contacto: ccarrillo1616@gmail.com</h7>
          </Container>
        </div>
      </div>
    );
  }
}

export default Fondopantalla;