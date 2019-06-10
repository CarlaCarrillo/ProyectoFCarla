import React, {Component} from 'react';
import Item from './Item/Item'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastClicked: null,
        }
        this.changeLastClicked = this.changeLastClicked.bind(this);
    }
    changeLastClicked(id) {
        this.setState({lastClicked:id});
    }
    renderItems(){
        return this.props.items.map((item,i) => (
          <Item
          key={`item-${i}`}
          lastClicked={this.state.lastClicked}
          changeLastClicked={this.changeLastClicked}
          {...item} 
          /> 
    ));
}
    render() {
        return (
            <table className="List">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Clicked</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
    

export default List;

    