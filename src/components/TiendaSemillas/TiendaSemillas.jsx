import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Semillas';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaSemillas.css';


class TiendaSemillas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            semillas: [],
            lastClicked: null,
        }
        this.semillaAgregada = this.semillaAgregada.bind(this);
    }

    componentDidMount() {
        getData('semillas').then((semillas) => this.setState({ semillas }));
    }

    semillaAgregada(semilla) {
        toast.info(`${semilla.name} Añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.semillas);
        return (
            <div>
                <h1 className="tituloSemillas">ENCUENTRA VARIEDAD DE SEMILLAS</h1>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.semillas.map(
                            semilla => <Cart semillas={semilla} guardada={this.semillaAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaSemillas;
