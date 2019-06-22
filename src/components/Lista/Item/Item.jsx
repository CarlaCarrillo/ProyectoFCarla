import React, { Component } from 'react';

// Components
//import UpdateItem from '../UpdateItem/UpdateItem';
import { deleteData } from '../../utils/api'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
    this.props.changeLastClicked(this.props.id);
  }

  editItem() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateList();
  }

  removeItem(){
      deleteData('carrito',this.props.id).then(this.props.updateList).catch(console.log);
  }

  render() {
    const {id, name, description, costo,imagen} = this.props;
    return (
      <tr onClick={this.increaseClick}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{costo}</td>
        <td>{imagen}</td>
        <td>{this.state.clicked}</td>
        <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
        <td onClick={this.removeItem}>Remove</td>
       
      </tr>
    );
  }
}

export default Item;