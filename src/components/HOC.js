import React, { Component } from 'react';
import PropTypes from 'prop-types';

const updatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            this.incrementByOne = this.incrementByOne.bind(this);
        }

        incrementByOne() {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                };
            });
        }

        render() {
            return (
                <OriginalComponent
                    name='Weicheng'
                    count={this.state.count}
                    incrementByOne={this.incrementByOne}
                />
            );
        }
    }
    return NewComponent;
}

class ClickCounter extends Component {
    render() {
        const { name, count, incrementByOne } = this.props;
        return (
            <button onClick={incrementByOne}>
                {name} clicked {count} times
            </button>
        )
    }
}

class HoverCounter extends Component {
    render() {
        const { name, count, incrementByOne } = this.props;
        return (
            <h2 onMouseOver={incrementByOne}>
                {name} hovered {count} times
            </h2>
        )
    }
}

ClickCounter.propTypes = {
    name: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

HoverCounter.propTypes = {
    name: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

export const ClickCounterHOC = updatedComponent(ClickCounter);
export const HoverCounterHOC = updatedComponent(HoverCounter);