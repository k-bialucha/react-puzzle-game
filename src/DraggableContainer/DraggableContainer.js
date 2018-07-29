import React from 'react';

import { withGameContext } from '../gameContext';

import DraggableElement from '../DraggableElement/DraggableElement';

import './DraggableContainer.css'

const DraggableContainer = props => {
    const items = props.game.puzzles.map( puzzle => 
        <DraggableElement
            key={puzzle.id}
            id={puzzle.id} 
            image={puzzle.image}
            isGameStarted={props.game.timer !== 0}
            startGame={props.game.startGame}
        />
    );
    return (
        <div className="DraggableContainer">
            {items}
        </div>
    );
}

export default withGameContext(DraggableContainer);