import React from 'react';

import { withGameContext } from '../gameContext';

const ResetButton = props =>
    <button onClick={props.game.resetGame}>
        Reset!
    </button>
;

export default withGameContext(ResetButton)