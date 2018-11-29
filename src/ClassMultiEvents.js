import React, {Component} from 'react';

class ClassMultiEvents extends Component {
    constructor(props){
        super(props);
        this.state = {
            status:'online',
            width: window.innerWidth
        }
    }

    handleStatus = val => {
        console.log('handleStatus', val)
        this.setState({ status: val })
    }

    handleResize = () => this.setState({ width: window.innerWidth });

    componentDidMount() {
        window.addEventListener('online', () => this.handleStatus('online'));
        window.addEventListener('offline', () => this.handleStatus('offline'));
        window.addEventListener('resize', this.handleResize);        
    }
    componentWillUnmount() {
        window.removeEventListener('online', () => this.handleStatus('online'));
        window.removeEventListener('offline', () => this.handleStatus('offline'));
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        return(
            <div>
                <h1>Network status: {this.state.status}</h1>
                <h1>Width: {this.state.width}</h1>
            </div>
        )
    }
}

export default ClassMultiEvents;