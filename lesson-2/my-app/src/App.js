import React, { Component } from 'react';
import './App.css';
import Title from './Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to Scope Fall 2019</h2>
        <Title />
      </div>
    );
  }
}

export default App;
