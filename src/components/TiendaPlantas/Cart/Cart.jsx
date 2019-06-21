import React from 'react';
import { postData } from '../../../components/utils/api'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-toastify/dist/ReactToastify.css';



class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito : [],
            clicked: 0,
        }
      this.limpiarCarrito = this.limpiarCarrito.bind(this);  
    };
    

    create(data) {
        this.props.guardada(data.plantas);
        postData('carrito', data.plantas).then("this.props.hide").catch(this.showError);
    }
 
   limpiarCarrito = (id) => {
       console.log(this.state);
    const newState = this.state;
    const index = newState.carrito.findIndex(a => a.id === id);

    if (index === -1) return;
    newState.carrito.splice(index, 1);

    this.setState(newState); // This will update the state and trigger a rerender of the components
  }
  

    render() {
        return (
            <Col sm={4} md={4}>
                <Card id="carta" style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={this.props.plantas.imagen} alt="242x200" />
                    <Card.Body>
                        <Card.Title><h5>{this.props.plantas.name}</h5></Card.Title>
                        <Card.Text>
                            <h5>{this.props.plantas.description}</h5>
                            <h2>$ {this.props.plantas.costo}</h2>
                        </Card.Text>
                        {this.props.isViewingCart === false && <Button variant="outline-success" onClick={() => this.create({ ...this.props })}>Agregar a carrito </Button>}
                        {this.props.isViewingCart === true && <Button variant="outline-danger" onClick={() => this.limpiarCarrito(this.props.plantas.id)}>Borrar del carrito </Button>}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default Cart;