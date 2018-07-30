import React from 'react';

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
                    isCorrect={puzzle.isCorrect}
                    isIncorrect={puzzle.isIncorrect}
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