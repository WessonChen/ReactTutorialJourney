/* eslint-disable no-unused-vars */
import React, {Component} from 'react'

class LifecycleParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        };
        this.changeState = this.changeState.bind(this)
        console.log('LifecycleParent constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleParent getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleParent componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleParent shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleParent getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleParent componentDidUpdate')
    }

    changeState() {
        this.setState({
            name: ''
        })
        console.log('------State Changed------')
    }

    render() {
        console.log('LifecycleParent render')
        return <div>
            <button onClick={this.changeState}>
                Change State
            </button>
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

    shouldComponentUpdate() {
        console.log('LifecycleChild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleChild getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleChild componentDidUpdate')
    }

    render() {
        console.log('LifecycleChild render')
        return <div></div>
    }
}

export default LifecycleParent