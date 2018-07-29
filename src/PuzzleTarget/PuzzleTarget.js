import React from 'react';

import './PuzzleTarget.css';

class PuzzleTarget extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDraggingOver: false,
            isCorrect: false
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
        const isCorrect = id === this.props.correctAnswerId;
        this.setState({
            isDraggingOver: false,
            isCorrect
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
        const className = this.state.isDraggingOver ? "PuzzleTarget--drop-allowed" : "PuzzleTarget";
        return (
            <div 
                className={className}
                onDragOver={this.state.isCorrect ? undefined : this.handleDragOver.bind(this)}
                onDragLeave={this.state.isCorrect ? undefined : this.handleDragExit.bind(this)}
                onDrop={this.state.isCorrect ? undefined : this.handleDrop.bind(this)}
            >
            {this.state.isCorrect &&
                <img src={this.props.image} className="PuzzleTarget-image"/>
            }
            </div>
        );
    }
}

export default PuzzleTarget;