import React from 'react';
import { 
    postData, 
    getData,
    patchData } from '../../../components/utils/api'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-toastify/dist/ReactToastify.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
            clicked: 0,
        }
        
        this.create = this.create.bind(this);
        this.addNewItemToCart = this.addNewItemToCart.bind(this);
    };

    addNewItemToCart(data) {
        postData('carrito', data.semillas).then(() => this.props.guardada(data.semillas)).catch((error) => console.log(error));
    }

    addItemQtyToCart(data) {
        console.log(data)
        patchData('carrito', data.id, data).then(() => this.props.guardada(data)).catch((error) => console.log(error));
    }

    create(data) {
        getData(`carrito/${data.semillas.id}`).then(function (response) {
            if (!Array.isArray(response)) {
                response.quantity++;
                this.addItemQtyToCart(response)
            } else {
                data.semillas.quantity = 1;
                this.addNewItemToCart(data)
            }
        }.bind(this))
    }
    


    render() {
        return (
            <Col sm={4} md={4}>
                <Card id="carta" style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={this.props.semillas.imagen} alt="242x200" />
                    <Card.Body>
                        <Card.Title><h4>{this.props.semillas.name}</h4></Card.Title>
                        <Card.Text>
                            <h6>{this.props.semillas.description}</h6>
                            <h2>$ {this.props.semillas.costo} .00</h2>
                        </Card.Text>
                        {this.props.isViewingCart === false && <Button className="botonAgregar" variant="outline-success" onClick={() => this.create({ ...this.props })}>Agregar a carrito </Button>}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default Cart;