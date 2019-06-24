import React, { Component } from 'react';
import MainPage from './MainPage.js';
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
        <MainPage />
      </>
    );
  }
}
