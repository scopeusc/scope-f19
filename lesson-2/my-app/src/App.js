import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'

class App extends Component {
  render() {
    var helloWorld = 'Welcome to Scope Fall 2019';
    return (
      <div className="App">
        <h2 id >{helloWorld}</h2>
        <Form />
      </div>
    );
  }
}

export default App;
