import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Kit';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaKit.css';


class TiendaKit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kits: [],
            lastClicked: null,
        }
        this.kitAgregada = this.kitAgregada.bind(this);
    }

    componentDidMount() {
        getData('kits').then((kits) => this.setState({ kits }));
    }

    kitAgregada(kit) {
        toast.info(`${kit.name} Añadida al carrito`, { autoClose: 2000 })
    }
    render() {
        console.log(this.state.kits);
        return (
            <div>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.kits.map(
                            kit => <Cart kits={kit} guardada={this.kitAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaKit;
