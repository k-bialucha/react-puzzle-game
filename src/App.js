import React, { Component } from 'react';

import { GameProvider } from './gameContext';

import Timer from './Timer/Timer';
import Grid from './Grid/Grid';
import DraggableContainer from './DraggableContainer/DraggableContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <GameProvider>
        <div className="App">
          <div className="App-column">
            <Timer />
            <Grid />
            <DraggableContainer />
          </div>
        </div>
      </GameProvider>
    );
  }
}

export default App;
