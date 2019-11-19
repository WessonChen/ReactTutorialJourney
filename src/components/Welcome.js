import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome visitor',
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button
                    onClick={() => this.changeMessage()}
                >Subscribe
                </button>
            </div>
        )
    }
}

export default Welcome