import React from 'react';
import PropTypes from 'prop-types';

import { withGameContext } from '../gameContext';

import PuzzleTarget from '../PuzzleTarget/PuzzleTarget';

import './PuzzleGrid.css';

class PuzzleGrid extends React.PureComponent {
    render() {
        const gridElements = this.props.game.puzzles.map( 
            puzzle => (
                <PuzzleTarget 
                    key={puzzle.id}
                    id={puzzle.id}
                    isCorrect={!!puzzle.isCorrect}
                    isIncorrect={!!puzzle.isIncorrect}
                    image={puzzle.image}
                    dropPuzzle={this.props.game.dropPuzzle}
                />
            )
        );
        return (
            <div className="PuzzleGrid">
                {gridElements}
            </div>
        );
    }
}

export default withGameContext(PuzzleGrid);

PuzzleGrid.propTypes = {
    game: PropTypes.shape({
        puzzles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })).isRequired,
        dropPuzzle: PropTypes.func.isRequired
    })
}