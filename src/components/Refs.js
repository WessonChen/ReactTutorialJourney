import React, { Component } from 'react';

class CreateRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.callBackRef = null;
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        // console.log(this.inputRef);
        // this.inputRef.current.focus();
        if (this.callBackRef) {
            this.callBackRef.focus();
        }
    }

    clickHandler() {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCallBackRef}/>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        );
    }
}

export {CreateRef}