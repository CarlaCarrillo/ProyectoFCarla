import React, { Component } from './node_modules/react';
//Aqui importamos nuestra imagen
import imgfondo from './imgfondo.jpg';


class imgfondo extends Component {
  render() {
    return (
      <div className="logo">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img id="imgfondo" src={imgfondo} />
      </div>
    );
  }
}

export default imgfondo;