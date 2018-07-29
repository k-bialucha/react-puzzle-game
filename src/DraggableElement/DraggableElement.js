import React from 'react';

import './DraggableElement.css';

import logo from '../logo.svg';

class DraggableElement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDragged: false
        };
    }
    handleDrag(event, type, id) {
        if (!this.props.isGameStarted)
            this.props.startGame();
        this.setState({
            isDragged: true
        });
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('dataType', type)
        event.dataTransfer.setData('id', id)
    }
    handleDragEnd() {
        this.setState({
            isDragged: false
        });
    }
    render() {
        return (
            <img
                src={this.props.image || logo}
                className={"DraggableElement-image" + (this.state.isDragged ? " DraggableElement-image--dragged" : "")}
                draggable 
                onDragStart={event => this.handleDrag(event, 'image', this.props.id)}
                onDragEnd={this.handleDragEnd.bind(this)}
            />
        );
    }
}

export default DraggableElement;