import React from 'react';

const Context = React.createContext();

class GameProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        }
    }
    startGame() {
        this.intervalId = setInterval(this.incrementTimer.bind(this), 19)
    }
    incrementTimer() {
        this.setState({
            timer: this.state.timer + 19
        });
    }
    stopGame() {
        clearInterval(this.intervalId);
        this.setState({
            timer: 0
        });
    }
    render() {
        return (
            <Context.Provider
                value={{
                    timer: this.state.timer,
                    startGame: this.startGame.bind(this)
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