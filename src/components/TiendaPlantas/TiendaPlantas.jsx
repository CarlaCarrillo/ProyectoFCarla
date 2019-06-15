import React from 'react';
import {getData} from '../utils/api';

//Action
import Cart from './Cart/Cart';

//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Slideone from './Gallery/Slideone.jpg';
import Planta1 from './Gallery/Planta1.jpg';
import Planta2 from './Gallery/Planta2.jpg';
import Planta3 from './Gallery/Planta3.jpg';
import Planta4 from './Gallery/Planta4.jpg';
import Planta5 from './Gallery/Planta5.jpg';
import Planta6 from './Gallery/Planta6.jpg';
import Planta7 from './Gallery/Planta7.jpg';
import Planta8 from './Gallery/Planta8.jpg';

//iconos de pie de página
import Entrega from './Gallery/Entrega.png';
import Envio from './Gallery/Envio.png'
import Planta from './Gallery/Planta.png'
import Regalo from './Gallery/Regalo.png'


import './TiendaPlantas.css';

class TiendaPlantas extends React.Component { 
   
    constructor(props) {
        super(props);
        this.state = {
            plantas:[],
            lastClicked: null,
        }
    }
    componentWillMount() {
        getData('plantas').then((plantas) => this.setState({plantas}));
        console.log(this.state.plantas);
    }
  
    render() {

        console.log(this.state.plantas);
        return(            
                <div>
                   {this.state.plantas.map(
                       planta=>{
                           return(<Cart plantas={planta}/>)
                       }
                   )} 

                </div>
        )
        
    }
}

export default TiendaPlantas;

//return (
  //  {this.state.plantas.map(planta => {
        
    //    return (
      //  <Cart plantas={planta}/>
    //)})}
   
   
//);