import React, { Component } from 'react';
import './App.css';
import FuncInput from './FuncInput';
import ClassInput from './ClassInput';
import FunctionEvents from './FunctionEvents';
import ClassEvents from './ClassEvents';
import FuncMultiEvents from './FuncMultiEvents';
import ClassMultiEvents from './ClassMultiEvents';

class App extends Component {
	render() {
    	return (
      		<div className="App">
        		<h1>React Hooks Demo</h1>
        		<div style={{display:'flex', flexDirection:'row'}}>>
        			<div style={{ width: '50%', padding: 100}}>
          				<h1>Functional components</h1>
          				<FuncInput />
						  {/* <FunctionEvents /> */}
						  <FuncMultiEvents />
        			</div>
					<div style={{ width: '50%', padding:100}}>
						<h1>Class components</h1>
						<ClassInput />
						{/* <ClassEvents /> */}
						<ClassMultiEvents />
					</div>
        		</div>
      		</div>
    	);
  	}
}

export default App;
