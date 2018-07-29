import React, { Component } from 'react';

import Grid from './Grid/Grid';
import DraggableContainer from './DraggableContainer/DraggableContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-column">
          <Grid />
          <DraggableContainer />
        </div>
      </div>
    );
  }
}

export default App;
