import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getDataWithQuery } from '../utils/api';
import storage from '../utils/storage';
import Fondopantalla from './Fondopantalla';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      loggedIn: false,
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({target}) {
    this.setState({username: target.value, loginError: false});
  }

  updatePassword({target}) {
    this.setState({password: target.value, loginError: false});
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store('user', userData[0]);
      this.setState({loggedIn: true});
      // console.log(storage.retreive('user'));
    } else {
      this.setState({loginError: true});
    }
  }

  logIn() {
    getDataWithQuery(({...this.state}), 'users').then(this.checkUser);
  }

  render() {
    let alert = null;
    if (this.state.loggedIn) {
      return (<Redirect to="/list" />);
    }
    if (this.state.loginError) {
      alert = (<Alert variant="danger">Check password or username!</Alert>);
    }
    return (

      <Container>
        <Row>
          <Col sm={8}>
          <Fondopantalla/>
          </Col>
          <Col sm={4}>
            <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Usuario o correo"
                  value={this.state.username}
                  onChange={this.updateUsername}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="button" onClick={this.logIn}>Log In</Button>
              <Button variant="primary" type="button" onClick={this.logIn}>Registro</Button>
            </Modal.Footer>
            {alert}
            </Modal.Dialog>
            </Col>
          </Row>
        </Container>




      
    );
  }
}

export default Login;