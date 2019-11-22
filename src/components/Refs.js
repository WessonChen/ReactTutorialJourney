import React, { Component } from 'react';

class CreateRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.callBackRef = null;
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        };
        this.clickHandlerChild = this.clickHandlerChild.bind(this);
    }

    componentDidMount() {
        if (this.callBackRef) {
            this.callBackRef.focus();
        }
    }

    clickHandlerChild() {
        let node = this.inputRef.current;
        node.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCallBackRef} />
                <button onClick={this.clickHandlerChild}>Click from child to focus</button>
            </div>
        );
    }
}

class CreateRefParent extends Component {
    constructor(props) {
        super(props);
        this.textInputRef = React.createRef();
        this.clickHandlerParent = this.clickHandlerParent.bind(this);
    }

    clickHandlerParent() {
        this.textInputRef.current.clickHandlerChild();
    }

    render() {
        return (
            <>
                <CreateRef ref={this.textInputRef} />
                <button onClick={this.clickHandlerParent}>Click from parent to focus</button>
            </>
        );
    }
}

export { CreateRefParent }