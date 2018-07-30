import React from 'react';
import PropTypes from 'prop-types';

import './PuzzleItem.css';

class PuzzleItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDragged: false
        };
    }
    handleDrag(event, id) {
        if (!this.props.isGameStarted)
            this.props.startGame();
        this.props.resetIncorrectMoves()
        this.setState({
            isDragged: true
        });
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('id', id)
    }
    handleDragEnd() {
        this.setState({
            isDragged: false
        });
    }
    render() {
        if (this.props.hideElement)
            return null;
        return (
            <img
                src={this.props.image}
                className={"PuzzleItem" + (this.state.isDragged ? " PuzzleItem--dragged" : "")}
                draggable 
                onDragStart={event => this.handleDrag(event, this.props.id)}
                onDragEnd={this.handleDragEnd.bind(this)}
            />
        );
    }
}

export default PuzzleItem;

PuzzleItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    hideElement: PropTypes.bool,
    startGame: PropTypes.func.isRequired,
    resetIncorrectMoves: PropTypes.func.isRequired
}