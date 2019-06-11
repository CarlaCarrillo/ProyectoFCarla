import React, { Component } from 'react';
//Aqui importamos nuestra imagen
import imgfondo from './imgfondo.jpg';


class Fondopantalla extends Component {
  render() {
    return (
      <div className="imgfondo">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img id="imgfondo" src={imgfondo} />
      </div>
    );
  }
}

export default Fondopantalla;