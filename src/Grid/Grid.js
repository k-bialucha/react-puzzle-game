import React from 'react';

import DropReceiver from '../DropReceiver/DropReceiver';

import './Grid.css';

class Grid extends React.PureComponent {
    render() {
        return (
            <div className="Grid">
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
                <DropReceiver />
            </div>
        );
    }
}

export default Grid;