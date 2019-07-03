import React from 'react';

//Componentes
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Login from './Login/Login';
import Header from './Header/Header';
import Lista from './Lista/List';
import MesasCultivo from './MesasCultivo/MesasCultivo';
import UserRegister from './UserRegister/UserRegister';
import TiendaPlantas from './TiendaPlantas/TiendaPlantas';
import Articulo from './Articulo/Articulo';
import TiendaSemillas from './TiendaSemillas/TiendaSemillas';
import TiendaHerram from './TiendaHerram/TiendaHerram';
import TiendaKit from './TiendaKit/TiendaKit';
import TiendaTerrarios from './TiendaTerrarios/TiendaTerrarios';
import TiendaMacetas from './TiendaMacetas/TiendaMacetas';
import TiendaArreglos from './TiendaArreglos/TiendaArreglos';
import PaginaPrincipal from './PaginaPrincipal/PaginaPrincipal';
import Sucursales from './Sucursales/Sucursales';



const App = () => (
  <BrowserRouter>
    <Route component={Header} />
    <Route exact path="/" component={Login} />
    <Route exact path="/user" component={UserRegister} />
    <Route path="/plantas" component={TiendaPlantas} />
    <Route path="/carrito" component={Lista} />
    <Route path="/articulo" component={Articulo} />
    <Route path="/mesas" component={MesasCultivo} />
    <Route path="/semillas" component={TiendaSemillas} />
    <Route path="/herramientas" component={TiendaHerram} />
    <Route path="/kit" component={TiendaKit} />
    <Route path="/terrarios" component={TiendaTerrarios} />
    <Route path="/macetas" component={TiendaMacetas} />
    <Route path="/arreglos" component={TiendaArreglos} />
    <Route path="/principal" component={PaginaPrincipal} />
    <Route path="/sucursales" component={Sucursales} />

   
  </BrowserRouter>
)

export default App;

//<Route path="/list" component={List} />
//<Route path="/carrito" component={ShopCar} />