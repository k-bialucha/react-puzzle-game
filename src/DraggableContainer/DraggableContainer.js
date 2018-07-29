import React from 'react';

import DraggableElement from '../DraggableElement/DraggableElement';

import './DraggableContainer.css'

import row1col1 from "../assets/images/row-1-col-1.png";
import row1col2 from "../assets/images/row-1-col-2.png";
import row1col3 from "../assets/images/row-1-col-3.png";
import row2col1 from "../assets/images/row-2-col-1.png";
import row2col2 from "../assets/images/row-2-col-2.png";
import row2col3 from "../assets/images/row-2-col-3.png";
import row3col1 from "../assets/images/row-3-col-1.png";
import row3col2 from "../assets/images/row-3-col-2.png";
import row3col3 from "../assets/images/row-3-col-3.png";

const images = [
    { id: 11, image: row1col1 },
    { id: 12, image: row1col2 },
    { id: 13, image: row1col3 },
    { id: 21, image: row2col1 },
    { id: 22, image: row2col2 },
    { id: 23, image: row2col3 },
    { id: 31, image: row3col1 },
    { id: 32, image: row3col2 },
    { id: 33, image: row3col3 }
];

const DraggableContainer = props => {
    const items = images.map( item => 
        <DraggableElement key={item.id} id={item.id} image={item.image}/>
    );
    return (
        <div className="DraggableContainer">
            {items}
        </div>
    );
}

export default DraggableContainer;