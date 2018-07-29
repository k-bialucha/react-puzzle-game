import React from 'react';

import './DraggableElement.css';

import logo from '../logo.svg';

class DraggableElement extends React.PureComponent {
    handleDrag(event, type, id) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('dataType', type)
        event.dataTransfer.setData('id', id)
    }
    render() {
        return (
            <img
                src={this.props.image || logo}
                className={"DraggableElement-image" + this.state.isDragged ? " DraggableElement-image--dragged" : ""}
                draggable 
                onDragStart={event => this.handleDrag(event, 'image', this.props.id)}
            />
        );
    }
}

export default DraggableElement;