import React, { Component } from 'react';

import { GameProvider } from './gameContext';

import Timer from './Timer/Timer';
import PuzzleGrid from './PuzzleGrid/PuzzleGrid';
import PuzzlesBox from './PuzzlesBox/PuzzlesBox';
import GameFinishedBox from './GameFinishedBox/GameFinishedBox';
import ResetButton from './ResetButton/ResetButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <GameProvider>
        <div className="App">
          <GameFinishedBox />
          <ResetButton />
          <div className="App-column">
            <Timer />
            <PuzzleGrid />
            <PuzzlesBox />
          </div>
        </div>
      </GameProvider>
    );
  }
}

export default App;
