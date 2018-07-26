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
        this.setState({
            textReceived: "Hello World!"
        })
        event.stopPropagation();
    }
    handleDragExit(event) {
        console.log('Drag exit!')
        this.setState({
            textReceived: undefined
        })
        event.stopPropagation();
    }
    render() {
        //                onDrop={this.handleDrop.bind(this)}

        return (
            <div 
                className="DropReceiver"
                onDragOver={this.handleDrop.bind(this)}
                onDragLeave={this.handleDragExit.bind(this)}
                onDropCapture={this.handleDrop.bind(this)}
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