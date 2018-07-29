import React from 'react';

import DropReceiver from '../DropReceiver/DropReceiver';

import './Grid.css';

const GRID_SIZE = 3;

const gridElements = [];

for (let rowIndex = 1; rowIndex <= GRID_SIZE; rowIndex++) {
    for (let colIndex = 1; colIndex <= GRID_SIZE; colIndex++) {
        const correctAnswerId = `${rowIndex}${colIndex}`
        gridElements.push(<DropReceiver key={correctAnswerId} correctAnswerId={correctAnswerId} />)
    }
}

class Grid extends React.PureComponent {
    render() {
        return (
            <div className="Grid">
                {gridElements}
            </div>
        );
    }
}

export default Grid;