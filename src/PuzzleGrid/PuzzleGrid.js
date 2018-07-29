import React from 'react';

import { withGameContext } from '../gameContext';

import DropReceiver from '../DropReceiver/DropReceiver';

import './PuzzleGrid.css';

class PuzzleGrid extends React.PureComponent {
    render() {
        const gridElements = this.props.game.puzzles.map( 
            puzzle => <DropReceiver key={puzzle.id} correctAnswerId={puzzle.id} />
        );
        return (
            <div className="PuzzleGrid">
                {gridElements}
            </div>
        );
    }
}

export default withGameContext(PuzzleGrid);