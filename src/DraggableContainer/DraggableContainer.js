import React from 'react';

import DraggableElement from '../DraggableElement/DraggableElement';

import './DraggableContainer.css'

const images = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

const DraggableContainer = props => {
    const items = images.map( image => 
        <DraggableElement key={image.id} id={image.id}/>
    );
    return (
        <div className="DraggableContainer">
            {items}
        </div>
    );
}

export default DraggableContainer;