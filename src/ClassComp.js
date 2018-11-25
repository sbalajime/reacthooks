import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Balaji'
        }
    }
    handleNameChange = e => this.setState({ name: e.target.value });

    render(){
        return(
            <input value={this.state.name} onChange={this.handleNameChange} />
        )
    }
}