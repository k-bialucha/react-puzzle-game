import React from 'react';

import generatePuzzles from './utils/generatePuzzles';

const GAME_FINISHED_MESSAGE = "Awesome! You won!";

const getInitialState = () => ({
    timer: 0,
    gameFinishedMessage: undefined,
    puzzles: generatePuzzles()
});

const Context = React.createContext();

class GameProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = getInitialState();
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
        setTimeout(() => this.setState( getInitialState() ), 5000);
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
        const isGameCompleted = puzzles.reduce(
            (current, nextPuzzle) => current && nextPuzzle.isCorrect, 
            true
        );
        if (isGameCompleted)
            this.finishGame();
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
    startPuzzleDrag(id) {
        let { puzzles } = this.state;
        puzzles = puzzles.map(
            puzzle => {
                const { isIncorrect, ...restPuzzleData } = puzzle;
                if (puzzle.id === id)
                    return ({ 
                        ...restPuzzleData,
                        isBeingDragged: true 
                    })
                return restPuzzleData;
            }
        );
        this.setState({ puzzles });
    }
    stopPuzzleDrag(id) {
        let { puzzles } = this.state;
        puzzles = puzzles.map(
            puzzle => {
                if (puzzle.id === id)
                    return ({ 
                        ...puzzle,
                        isBeingDragged: false 
                    })
                return puzzle;
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
                    gameFinishedMessage: this.state.gameFinishedMessage,
                    startGame: this.startGame.bind(this),
                    dropPuzzle: this.dropPuzzle.bind(this),
                    startPuzzleDrag: this.startPuzzleDrag.bind(this),
                    stopPuzzleDrag: this.stopPuzzleDrag.bind(this)
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