import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Macetas';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaMacetas.css';


class TiendaMacetas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            macetas: [],
            lastClicked: null,
        }
        this.macetaAgregada = this.macetaAgregada.bind(this);
    }

    componentDidMount() {
        getData('macetas').then((macetas) => this.setState({ macetas }));
    }

    macetaAgregada(maceta) {
        toast.info(`${maceta.name} añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.macetas);
        return (
            <div>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.macetas.map(
                            maceta => <Cart macetas={maceta} guardada={this.macetaAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaMacetas;
