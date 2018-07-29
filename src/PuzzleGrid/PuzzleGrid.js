import React from 'react';

import { withGameContext } from '../gameContext';

import PuzzleTarget from '../PuzzleTarget/PuzzleTarget';

import './PuzzleGrid.css';

class PuzzleGrid extends React.PureComponent {
    render() {
        const gridElements = this.props.game.puzzles.map( 
            puzzle => <PuzzleTarget key={puzzle.id} correctAnswerId={puzzle.id} image={puzzle.image} />
        );
        return (
            <div className="PuzzleGrid">
                {gridElements}
            </div>
        );
    }
}

export default withGameContext(PuzzleGrid);