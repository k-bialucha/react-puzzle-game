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
        this.props.startPuzzleDrag(this.props.id);
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('id', id)
    }
    handleDragEnd() {
        this.props.stopPuzzleDrag(this.props.id);
    }
    render() {
        if (this.props.hideElement)
            return null;
        const style = createStyle(this.props.position);
        return (
            <img
                src={this.props.image}
                alt=""
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
    startPuzzleDrag: PropTypes.func.isRequired,
    stopPuzzleDrag: PropTypes.func.isRequired
}