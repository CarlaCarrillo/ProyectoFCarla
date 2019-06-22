import React, {Component} from 'react';
import {getData} from '../utils/api';
import Itemcart from './Item/Item';

import Button from 'react-bootstrap/Button';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito:[],
            lastClicked: null,
        }
        this.updateList = this.updateList.bind(this);
        this.changeLastClicked = this.changeLastClicked.bind(this);
       
        this.closeModal = this.closeModal.bind(this);
        }

   componentDidMount() {
       this.updateList();
   }

   updateList() {
       getData('carrito').then((carrito) => this.setState({carrito}));
   }
   changeLastClicked(id) {
       this.setState({lastClicked:id});
    }
    

    closeModal() {
        this.setState({creating:false});
        this.updateList();
    }
    
    renderCarrito(){
        return this.state.carrito.map((itemcart,i) => (
          <Itemcart
          key={`itemcart-${i}`}
          lastClicked={this.state.lastClicked}
          changeLastClicked={this.changeLastClicked}
          updateList={this.updateList}
          {...itemcart} 
          /> 
    ));
}
    render() {
        return (
            <>
            
            <table className="List">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Imagen</th>
                        <th>Clicked</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCarrito()}
                </tbody>
            </table>
            </>
        );
    }
}


export default List;

    