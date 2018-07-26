import React, { Component } from 'react';

import DropReceiver from './DropReceiver/DropReceiver';
import DraggableElement from './DraggableElement/DraggableElement';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DraggableElement />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DropReceiver />
      </div>
    );
  }
}

export default App;
