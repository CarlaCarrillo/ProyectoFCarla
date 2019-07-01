import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './Hamburguer.css'

class Hamburguer extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Menu>
        <Link to="/" ><a id="home" className="menu-item">HOME</a></Link><p/>
        <a id="submenu" className="menu-item" href="/articulo">Artículo del día</a>
        <a id="principal" className="menu-item">TIENDA</a>
        <Link to="/plantas"> <a id="submenu" className="menu-item">Plantas</a> </Link>
        <a id="submenu" className="menu-item" href="/mesas">Mesas de cultivo</a>
        <a id="submenu" className="menu-item" href="/semillas">Semillas</a>
        <a id="submenu" className="menu-item" href="/macetas">Macetas</a>
        <a id="submenu" className="menu-item" href="/herramientas">Herramientas</a><p/>
        <a id="principal" className="menu-item">REGALOS</a>
        <a id="submenu" className="menu-item" href="/kit">Kit Mi Primer Huerto</a>
        <a id="submenu" className="menu-item" href="/terrarios">Terrarios</a>
        <a id="submenu" className="menu-item" href="/arreglos">Arreglos Macetas</a><p/>
        <a id="principal" className="menu-item" href="/sucursales">SUCURSALES</a>

        
      </Menu>
    );
  }
}
export default Hamburguer;
//<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>