import React, { Component } from 'react';
// import fetch from 'node-fetch';
import Signup from './Signup.js'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    // this.api = `http://localhost:8000/api/example`;
  }

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean!!</h1>
        <Signup />
      </>
    );
  }
}
