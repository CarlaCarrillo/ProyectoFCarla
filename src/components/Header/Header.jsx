import React from 'react';

import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Hamburguer from './Hamburguer/Hamburguer';


import './Header.css';

const Header = () => ( 
    <div className="header">
    <Hamburguer/>
    
    <Navbar id="barra" bg="" expand="lg"> 
    <UserArea/>
    <h1 className="">Plantae.com</h1>
      <Logo/>
      
      
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
</Navbar>
</div>
);
// <UserArea loggedIn/>
export default Header;