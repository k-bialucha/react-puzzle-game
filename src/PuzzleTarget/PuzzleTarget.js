import React from 'react';

import './PuzzleTarget.css';

class PuzzleTarget extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDraggingOver: false
        };
    }
    handleDragOver(event) {
        this.setState({
            isDraggingOver: true
        })
        event.preventDefault();
    }
    handleDrop(event) {
        const id = event.dataTransfer.getData('id');
        this.props.dropPuzzle(this.props.id, id);
        this.setState({
            isDraggingOver: false,
        })
        event.stopPropagation();
    }
    handleDragExit(event) {
        this.setState({
            isDraggingOver: false
        })
        event.stopPropagation();
    }
    render() {
        const className = 
        `PuzzleTarget ${
        this.state.isDraggingOver ?
            "PuzzleTarget--drop-allowed" 
            : ""
        } ${
        this.props.isIncorrect ? 
            "PuzzleTarget--incorrect" 
            : ""
        }`;
        return (
            <div 
                className={className}
                onDragOver={this.props.isCorrect ? undefined : this.handleDragOver.bind(this)}
                onDragLeave={this.props.isCorrect ? undefined : this.handleDragExit.bind(this)}
                onDrop={this.props.isCorrect ? undefined : this.handleDrop.bind(this)}
            >
            {this.props.isCorrect &&
                <img src={this.props.image} className="PuzzleTarget-image"/>
            }
            </div>
        );
    }
}

export default PuzzleTarget;