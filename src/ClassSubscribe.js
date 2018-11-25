import React, {Component} from 'react';

class ClassSubscribe extends Component {
    constructor(props){
        super(props);
        this.state = {
            status:'online'
        }
    }

    handleStatus = val => {
        console.log('handleStatus', val)
        this.setState({ status: val })
    }

    componentDidMount() {
        window.addEventListener('online', () => this.handleStatus('online'));
        window.addEventListener('offline', () => this.handleStatus('offline'));
    }
    componentWillUnmount() {
        window.removeEventListener('online', () => this.handleStatus('online'));
        window.removeEventListener('offline', () => this.handleStatus('offline'));
    }
    render() {
        return(
            <h1>{this.state.status}</h1>
        )
    }
}

export default ClassSubscribe;