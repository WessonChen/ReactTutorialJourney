/* eslint-disable no-unused-vars */
import React, {Component} from 'react'

class LifecycleParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        console.log('LifecycleParent constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleParent getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleParent componentDidMount')
    }

    render() {
        console.log('LifecycleParent render')
        return <div>
            Parent
            <LifecycleChild />
        </div>
    }
}

class LifecycleChild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        console.log('LifecycleChild constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleChild getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleChild componentDidMount')
    }

    render() {
        console.log('LifecycleChild render')
        return <div>
            Child
        </div>
    }
}

export default LifecycleParent