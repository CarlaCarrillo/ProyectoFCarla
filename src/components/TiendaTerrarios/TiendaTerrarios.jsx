import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Terrarios';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaTerrarios.css';


class TiendaTerrarios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            terrarios: [],
            lastClicked: null,
        }
        this.terrarioAgregada = this.terrarioAgregada.bind(this);
    }

    componentDidMount() {
        getData('terrarios').then((terrarios) => this.setState({ terrarios }));
    }

    terrarioAgregada(terrario) {
        toast.info(`${terrario.name} añadida al carrito`, { autoClose: 2000 })
    }
    render() {
        console.log(this.state.terrarios);
        return (
            <div>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.terrarios.map(
                            terrario => <Cart terrarios={terrario} guardada={this.terrarioAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaTerrarios;
