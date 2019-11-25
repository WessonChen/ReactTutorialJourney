import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const MemoComponent = React.memo(function MemoComponent(props) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {props.name}
        </div>
    )
});

MemoComponent.propTypes = {
    name: PropTypes.string,
}

class MemoComponentParent extends React.Component {
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
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export {MemoComponentParent}