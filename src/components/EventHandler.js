import React, {Component} from 'react'

function FunctionClick() {
    function clickHandler1() {
        console.log('Clicked1')
    }

    return (
        <div>
            <button onClick={clickHandler1}>Click1</button>
        </div>
    )
}

class ClassClick extends Component {
    clickHandler2() {
        console.log('Clicked2')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler2}>Click2</button>
            </div>
        )
    }
}

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello',
            isHello: true,
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: this.state.isHello ? 'Goodbye' : 'Hello',
    //         isHello: !this.state.isHello,
    //     })
    // }

    clickHandler() {
        this.setState({
            message: this.state.isHello ? 'Goodbye' : 'Hello',
            isHello: !this.state.isHello,
        })
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <div>{message}</div>
                <button onClick={this.clickHandler}>Error</button>
                <button onClick={this.clickHandler.bind(this)}>Call bind method</button>
                <button onClick={() => this.clickHandler()}>Use arrow function</button>
            </div>
        )
    }
}

export { FunctionClick, ClassClick, EventBind }