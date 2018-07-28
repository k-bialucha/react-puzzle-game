import React from 'react';

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
                src={logo}
                className="App-logo" 
                draggable 
                onDragStart={event => this.handleDrag(event, 'image', this.props.id)}
            />
        );
    }
}

export default DraggableElement;