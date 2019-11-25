import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        }, () => { 
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }

    incrementFromPrev() {
        this.setState(p => ({
            count: p.count + 1
        }))
    }

    incrementThree() {
        this.increment()
        this.increment()
        this.increment()
    }

    incrementThreeFromPrev() {
        this.incrementFromPrev()
        this.incrementFromPrev()
        this.incrementFromPrev()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementThree()}>IncrementThree</button>
                <button onClick={() => this.incrementThreeFromPrev()}>IncrementThreeFromPrev</button>
            </div>
        )
    }
}

export default Counter