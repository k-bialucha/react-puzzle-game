import React from 'react';
import PropTypes from 'prop-types';

import './PuzzleItem.css';

const createStyle = position => ({
    position: 'absolute',
    top: position.y,
    left: position.x,
    zIndex: position.zIndex
})

class PuzzleItem extends React.PureComponent {
    handleDrag(event, id) {
        if (!this.props.isGameStarted)
            this.props.startGame();
        this.props.resetIncorrectMoves()
        this.props.setPuzzleDraggedState(this.props.id, true);
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('id', id)
    }
    handleDragEnd() {
        this.props.setPuzzleDraggedState(this.props.id, false);
    }
    render() {
        if (this.props.hideElement)
            return null;
        const style = createStyle(this.props.position);
        return (
            <img
                src={this.props.image}
                className={"PuzzleItem" + (this.props.isBeingDragged ? " PuzzleItem--dragged" : "")}
                style={style}
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
    position: PropTypes.object.isRequired,
    isBeingDragged: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    hideElement: PropTypes.bool,
    startGame: PropTypes.func.isRequired,
    resetIncorrectMoves: PropTypes.func.isRequired,
    setPuzzleDraggedState: PropTypes.func.isRequired
}