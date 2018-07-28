import React from 'react';

import './DropReceiver.css';

class DropReceiver extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            textReceived: undefined
        };
    }
    handleDrop(event) {
        console.log('Drop!')
        const dataType = event.dataType.getData('dataType')
        this.setState({
            textReceived: "Hello World!" + (dataType || '')
        })
        event.stopPropagation();
    }
    handleDragOver(event) {
        console.log('Drag over!', event)
        const dataType = event.dataTransfer.getData('dataType')
        this.setState({
            textReceived: "Sth is dragged over" + (dataType || '')
        })
        event.preventDefault();
    }
    handleDragExit(event) {
        console.log('Drag exit!')
        this.setState({
            textReceived: undefined
        })
        event.stopPropagation();
    }
    render() {
        return (
            <div 
                className="DropReceiver"
                onDragOver={this.handleDragOver.bind(this)}
                onDragLeave={this.handleDragExit.bind(this)}
                onDrop={this.handleDrop.bind(this)}
            >
                <h2>Receiver</h2>
                <p>
                    {this.state.textReceived || "Drag element here to show text."}
                </p>
            </div>
        );
    }
}

export default DropReceiver;