import React from 'react';
import {getData} from '../../utils/api';
import CartShop from '../ShopCar/CartShop'

class ShopCar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            carrito:[],
            lastClicked: null,
        }
        
    }
    componentWillMount() {
    getData('carrito').then((carrito) => this.setState({carrito}));
        console.log(this.state.carrito);
    }

    /*
    componentDidMount() {
        this.updateCart();
    }

    componentWillMount() {
        getData('carrito').then((carrito) => this.setState({carrito}));
        //console.log(this.state.carrito);
    }

    updateCart() {
        getData('plantas').then((plantas) => this.setState({plantas}));
    }

    changeLastClicked(id) {
        this.setState({lastClicked:id});
     }
     createCart() {
         this.setState({creating:true});
     }
   
    
    renderCarts(){
        return this.state.carro.map((plantas,i) => (
          <Item
          key={`plantas-${i}`}
          lastClicked={this.state.lastClicked}
          changeLastClicked={this.changeLastClicked}
          updateList={this.updateList}
          {...plantas} 
          /> 
    ));
}
**/

    render() {

        //console.log(this.state.carrito);
        return(            
                <div>
                   {this.state.carrito.map(
                       carro=>{
                           return(<CartShop carrito ={carro}/>)
                       }
                   )} 

                </div>
        )
        
    }
}

export default ShopCar;
