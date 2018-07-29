import React from 'react';

import { withGameContext } from '../gameContext';

const Timer = props =>
    <div>
        {props.game.timer === 0 ?
            <React.Fragment>
                <h3>Click to start the game</h3>
                <button onClick={props.game.startGame}>
                    Start Game
                </button>
            </React.Fragment>
            : <h3>Time: {props.game.timer}</h3> 
        }
    </div>;

export default withGameContext(Timer);
