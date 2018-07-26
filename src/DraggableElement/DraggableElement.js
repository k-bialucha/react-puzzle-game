import React from 'react';

import logo from '../logo.svg';

class DraggableElement extends React.PureComponent {
    render() {
        return (
            <img
                src={logo}
                className="App-logo" 
                draggable 
                onDragStart={event => console.log(event)}
            />
        );
    }
}

export default DraggableElement;