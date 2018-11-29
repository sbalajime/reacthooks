import React, { Component } from 'react';
import './App.css';
import DisplayName from './HookTest';
import Input from './ClassComp';
import FunctionSubscribe from './FunctionSubscribe';
import ClassSubscribe from './ClassSubscribe';

class App extends Component {
	render() {
    	return (
      		<div className="App">
        		<h1>React Hooks Demo</h1>
        		<div style={{display:'flex', flexDirection:'row'}}>>
        			<div style={{ width: '50%', padding: 100}}>
          				<h1>Functional components</h1>
          				<DisplayName />
          				<FunctionSubscribe />
        			</div>
					<div style={{ width: '50%', padding:100}}>
						<h1>Class components</h1>
						<Input />
						<ClassSubscribe />
					</div>
        		</div>
      		</div>
    	);
  	}
}

export default App;
