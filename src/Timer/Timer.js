import React from 'react';
import PropTypes from "prop-types";

import { withGameContext } from '../gameContext';

const Timer = props =>
    <div>
        {props.game.timer === 0 ?
            <h3>Drag the puzzle to start the game</h3>
            : <h3>Time: {props.game.timer}</h3> 
        }
    </div>;

export default withGameContext(Timer);

Timer.propTypes = {
    game: PropTypes.shape({
        timer: PropTypes.number.isRequired
    })
}