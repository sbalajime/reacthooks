import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayName from './HookTest';
import Input from './ClassComp';
import FunctionSubscribe from './FunctionSubscribe';
import ClassSubscribe from './ClassSubscribe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayName />
        <Input />
        <FunctionSubscribe />
        <h1>Class</h1>
        {/* <ClassSubscribe /> */}
      </div>
    );
  }
}

export default App;
