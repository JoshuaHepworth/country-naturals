import React, { Component } from 'react';
import ButtonAppBar from './ButtonAppBar'
import logo from './logo.svg';
import Icon from '@material-ui/core/Icon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ButtonAppBar />
    <img className="logo" src="https://i.imgur.com/uXNMwVtl.jpg"/>
      </div>
    );
  }
}

export default App;
