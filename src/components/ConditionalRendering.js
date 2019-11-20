import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        //return this.state.isLoggedIn ? <div>Welcome Weicheng</div> : <div>Welcome Guest</div>

        // let user = this.state.isLoggedIn ? 'Weicheng' : 'Guest'
        // return <div>Welcome {user}</div>

        return this.state.isLoggedIn && <div>Welcome Weicheng</div>
    }
}

export { UserGreeting }