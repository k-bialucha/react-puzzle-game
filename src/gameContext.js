import React from 'react';

import row1col1 from "./assets/images/row-1-col-1.png";
import row1col2 from "./assets/images/row-1-col-2.png";
import row1col3 from "./assets/images/row-1-col-3.png";
import row2col1 from "./assets/images/row-2-col-1.png";
import row2col2 from "./assets/images/row-2-col-2.png";
import row2col3 from "./assets/images/row-2-col-3.png";
import row3col1 from "./assets/images/row-3-col-1.png";
import row3col2 from "./assets/images/row-3-col-2.png";
import row3col3 from "./assets/images/row-3-col-3.png";

const puzzles = [
    { id: "11", image: row1col1 },
    { id: "12", image: row1col2 },
    { id: "13", image: row1col3 },
    { id: "21", image: row2col1 },
    { id: "22", image: row2col2 },
    { id: "23", image: row2col3 },
    { id: "31", image: row3col1 },
    { id: "32", image: row3col2 },
    { id: "33", image: row3col3 }
];

const GAME_FINISHED_MESSAGE = "Awesome! You won!";

const initialState = {
    timer: 0,
    gameFinishedMessage: undefined,
    puzzles
};

const Context = React.createContext();

class GameProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    startGame() {
        this.intervalId = setInterval(this.incrementTimer.bind(this), 19)
    }
    incrementTimer() {
        this.setState({
            timer: this.state.timer + 19
        });
    }
    finishGame() {
        clearInterval(this.intervalId);
        this.setState({
            gameFinishedMessage: GAME_FINISHED_MESSAGE
        });
        setTimeout(() => this.setState(initialState), 5000);
    }
    dropPuzzle(targetId, droppedId) {
        const isDropCorrect = targetId === droppedId;
        if (isDropCorrect)
            this.setDropCorrect(targetId);
        else
            this.setDropIncorrect(targetId);
    }
    setDropCorrect(id) {
        let { puzzles } = this.state;
        puzzles = puzzles.map(
            puzzle => {
                if (puzzle.id === id)
                    return ({ 
                        ...puzzle,
                        isCorrect: true 
                    })
                return puzzle;
            }
        );
        this.setState({ puzzles });
    }
    setDropIncorrect(id) {
        let { puzzles } = this.state;
        puzzles = puzzles.map(
            puzzle => {
                if (puzzle.id === id)
                    return ({ 
                        ...puzzle,
                        isIncorrect: true 
                    })
                return puzzle;
            }
        );
        this.setState({ 
            puzzles,
            timer: this.state.timer + 1000
        });
    }
    resetIncorrectMoves() {
        let { puzzles } = this.state;
        puzzles = puzzles.map(
            puzzle => {
                const {isIncorrect, ...restPuzzleData} = puzzle;
                return restPuzzleData;
            }
        );
        this.setState({ puzzles });
    }
    render() {
        return (
            <Context.Provider
                value={{
                    timer: this.state.timer,
                    puzzles: this.state.puzzles,
                    startGame: this.startGame.bind(this),
                    dropPuzzle: this.dropPuzzle.bind(this),
                    resetIncorrectMoves: this.resetIncorrectMoves.bind(this)
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

const withGameContext = WrappedComponent => 
      props =>
        <Context.Consumer>
            {game =>
                <WrappedComponent {...props} game={game} />
            }
        </Context.Consumer>
;

export {
    GameProvider,
    withGameContext
}