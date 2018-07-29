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
    handleDrop(event) {
        const dataType = event.dataTransfer.getData('dataType');
        const id = event.dataTransfer.getData('id');
        const isCorrect = id === this.props.correctAnswerId;
        this.setState({
            isDraggingOver: false,
            isCorrect
        })
        event.stopPropagation();
    }
    handleDragOver(event) {
        const dataType = event.dataTransfer.getData('dataType')
        this.setState({
            isDraggingOver: true
        })
        event.preventDefault();
    }
    handleDragExit(event) {
        this.setState({
            isDraggingOver: false
        })
        event.stopPropagation();
    }
    render() {
        const className = this.state.isCorrect ? "PuzzleTarget--correct" : "PuzzleTarget";
        return (
            <div 
                className={className}
                onDragOver={this.state.isCorrect ? undefined : this.handleDragOver.bind(this)}
                onDragLeave={this.state.isCorrect ? undefined : this.handleDragExit.bind(this)}
                onDrop={this.state.isCorrect ? undefined : this.handleDrop.bind(this)}
            >
            {this.state.isCorrect ?
                <img src={this.props.image} className="PuzzleTarget-image"/>
                :
                <p>
                    {this.state.textReceived || "Drag element here to show text."}
                </p>
            }
            </div>
        );
    }
}

export default PuzzleTarget;