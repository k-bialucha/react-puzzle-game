import React from 'react';
import PropTypes from 'prop-types';

import { withGameContext } from '../gameContext';

import './GameFinishedBox.css';

const GameFinishedBox = props => {
    if (!props.game.gameFinishedMessage)
        return null;
    return (
        <div className="GameFinishedBox-container">
            <div className="GameFinishedBox">
                <h2>{props.game.gameFinishedMessage}</h2>
                <h2>Your time: {props.game.timer}</h2>
            </div>
        </div>
    );
}

export default withGameContext(GameFinishedBox);

GameFinishedBox.propTypes = {
    game: PropTypes.shape({
        gameFinishedMessage: PropTypes.string,
        timer: PropTypes.number.isRequired
    })
}