import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Arreglos';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaArreglos.css';


class TiendaArreglos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arreglos: [],
            lastClicked: null,
        }
        this.arregloAgregada = this.arregloAgregada.bind(this);
    }

    componentDidMount() {
        getData('arreglos').then((arreglos) => this.setState({ arreglos }));
    }

    arregloAgregada(arreglo) {
        toast.info(`${arreglo.name} añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.arreglos);
        return (
            <div>
                <h1 className="tituloArreglos">REGALA UN ARREGLO FLORAL EN UNA NACETA DE ESTILO ÚNICO</h1>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.arreglos.map(
                            arreglo => <Cart arreglos={arreglo} guardada={this.arregloAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaArreglos;
