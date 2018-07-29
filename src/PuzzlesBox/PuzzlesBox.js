import React from 'react';

import { withGameContext } from '../gameContext';

import PuzzleItem from '../PuzzleItem/PuzzleItem';

import './PuzzlesBox.css'

const PuzzlesBox = props => {
    const items = props.game.puzzles.map( puzzle => 
        <PuzzleItem
            key={puzzle.id}
            id={puzzle.id} 
            image={puzzle.image}
            isGameStarted={props.game.timer !== 0}
            startGame={props.game.startGame}
        />
    );
    return (
        <div className="PuzzlesBox">
            {items}
        </div>
    );
}

export default withGameContext(PuzzlesBox);