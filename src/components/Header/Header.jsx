import React from 'react';

import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './Header.css';

const Header = () => ( 
    
    <Navbar id="barra" bg="" expand="lg">
        <h1>Título de página</h1>
        <Logo/>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="dropdown">
      <Nav.Link href="#home"><h2></h2></Nav.Link>
      <Nav.Link href="#link"><h2></h2></Nav.Link>
      <NavDropdown  title="MENÚ" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">REGALO</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">TIENDA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">TIPO DE HUERTOS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SUCURSALES</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);
// <UserArea loggedIn/>
export default Header;