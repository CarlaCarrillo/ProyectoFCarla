import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Herram';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaHerram.css';


class TiendaHerramientas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            herramientas: [],
            lastClicked: null,
        }
        this.herramientaAgregada = this.herramientaAgregada.bind(this);
    }

    componentDidMount() {
        getData('herramientas').then((herramientas) => this.setState({ herramientas }));
    }

    herramientaAgregada(herramienta) {
        toast.info(`${herramienta.name} Añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.herramientas);
        return (
            <div>
                <h1 className="tituloHerram">HERRAMIENTAS PARA EL CUIDADO DE TU HUERTO</h1>
                <Carrousel />
                <Container className="ContenedorTarjetas">
                    <Row>
                        {this.state.herramientas.map(
                            herramienta => <Cart herramientas={herramienta} guardada={this.herramientaAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default TiendaHerramientas;
