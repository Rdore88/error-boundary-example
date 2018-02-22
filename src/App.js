import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
