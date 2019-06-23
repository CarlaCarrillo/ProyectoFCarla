import React, { Component } from 'react';

// Components
//import UpdateItem from '../UpdateItem/UpdateItem';
import { deleteData } from '../../utils/api'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import '../List.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
    this.props.changeLastClicked(this.props.id);
  }

  editItem() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateList();
  }

  removeItem(){
      deleteData('carrito',this.props.id).then(this.props.updateList).catch(console.log);
  }

  render() {
    const {id, name, description, costo,imagen} = this.props;
    return (
       
       <Row id='cartas'>
        <Col sm={4} md={4}>
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>     
      <Card id="carta" style={{ width: '14rem' }}>
      <Card.Img variant="top" src={imagen} alt="242x200" />
      <Card.Body>
          <Card.Title><h5>{name}</h5></Card.Title>
          <Card.Text>
            <h5>{description}</h5>
            <h2>$ {costo}</h2>  
            <tr onClick={this.increaseClick}>
              <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
              </tr>      
          </Card.Text>
          <Button variant="outline-danger" onClick={this.removeItem}>Remove</Button>
      </Card.Body>
      
      </Card>
      </Container>
      </Col> 
      </Row>
      
    );
  }
}

export default Item;

