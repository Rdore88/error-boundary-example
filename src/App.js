import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="header">Using ErrorBoundary to have more reactive code</h1>
        <List />
      </div>
    );
  }
}

export default App;
