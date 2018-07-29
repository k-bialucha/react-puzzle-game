import React, { Component } from 'react';

import DropReceiver from './DropReceiver/DropReceiver';
import DraggableContainer from './DraggableContainer/DraggableContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropReceiver />
        <DraggableContainer />
      </div>
    );
  }
}

export default App;
