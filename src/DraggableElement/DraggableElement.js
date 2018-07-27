import React from 'react';

import logo from '../logo.svg';

class DraggableElement extends React.PureComponent {
    handleDrag(event, type) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('dataType', type)
    }
    render() {
        return (
            <img
                src={logo}
                className="App-logo" 
                draggable 
                onDragStart={event => this.handleDrag(event, 'image')}
            />
        );
    }
}

export default DraggableElement;