import React from 'react';
import PropTypes from 'prop-types';

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
            resetIncorrectMoves={props.game.resetIncorrectMoves}
            hideElement={puzzle.isCorrect}
        />
    );
    return (
        <div className="PuzzlesBox">
            {items}
        </div>
    );
}

export default withGameContext(PuzzlesBox);

PuzzlesBox.propTypes = {
    game: PropTypes.shape({
        puzzles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            isCorrect: PropTypes.bool
        })).isRequired,
        timer: PropTypes.number.isRequired,
        startGame: PropTypes.func.isRequired,
        resetIncorrectMoves: PropTypes.func.isRequired
    })
}