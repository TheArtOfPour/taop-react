import React, { Component } from 'react';
import FermentableList from './components/FermentableList';
import HopList from './components/HopList';
import YeastList from './components/YeastList';
import TestButton from './components/TestButton';
import logo from './taop.png';
import './App.css';

class App extends Component {
    // @todo: import and cache environment.json
  static render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Art of Pour</h1>
        </header>
        <TestButton />
        <div style={{display:'inline-block', width:'900px'}}>
            <div style={{display:'inline-block', verticalAlign: 'top', width:'290px'}}>
                <h1>Yeast</h1>
                <YeastList />
            </div>
            <div style={{display:'inline-block', verticalAlign: 'top', width:'290px'}}>
                <h1>Fermentables | lbs</h1>
                <FermentableList />
                <FermentableList />
                <FermentableList />
                <FermentableList />
                <FermentableList />
            </div>
            <div style={{display:'inline-block', verticalAlign: 'top', width:'290px'}}>
                <h1>Hops | oz | min</h1>
                <HopList />
                <HopList />
                <HopList />
                <HopList />
                <HopList />
                <HopList />
                <HopList />
                <HopList />
                <HopList />
            </div>
        </div>
        <div id='results'></div>
      </div>
    );
  }
}

export default App;
