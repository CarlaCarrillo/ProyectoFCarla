import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart_Mesas';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel';

import './MesasCultivo.css';


class MesasCultivo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mesas: [],
            lastClicked: null,
        }
        this.mesaAgregada = this.mesaAgregada.bind(this);
    }

    componentDidMount() {
        getData('mesas').then((mesas) => this.setState({ mesas }));
    }

    mesaAgregada(mesa) {
        toast.info(`${mesa.name} añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.mesas);
        return (
            <div>
                <h1 className="tituloMesas">ENCUENTRA UNA GRAN VARIEDAD DE MESAS DE CULTIVO</h1>
                <Carrousel />
                <Container>
                    <Row>
                        {this.state.mesas.map(
                            mesa => <Cart mesas={mesa} guardada={this.mesaAgregada} isViewingCart={false} />
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>
        )
    }

}

export default MesasCultivo;
