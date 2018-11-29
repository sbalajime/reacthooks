import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname:'john',
            lname:'doe'
        }
    }
    handleFNameChange = e => this.setState({ fname: e.target.value });

    handleLNameChange = e => this.setState({ lname: e.target.value });

    render(){
        return(
            <div>
                <input value={this.state.fname} onChange={this.handleFNameChange} />
                <input value={this.state.lname} onChange={this.handleLNameChange} />
            </div>
        )
    }
}