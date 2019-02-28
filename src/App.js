import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from "./components/questList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Questions/>
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
       

      </div>
    );
  }
}

export default App;
