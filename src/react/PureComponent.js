import React from 'react';
import PropTypes from 'prop-types';

class PureComponent extends React.PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

class RegularComponent extends React.Component {
    render() {
        console.log('Regular Component Render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

class PureComponentParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: ''
            })
        }, 5000)
    }

    render() {
        console.log('------Parant Component Render------')
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} />
                <PureComponent name={this.state.name} />
            </div>
        )
    }
}

PureComponent.propTypes = {
    name: PropTypes.string,
};

RegularComponent.propTypes = {
    name: PropTypes.string,
};

export { PureComponentParent }