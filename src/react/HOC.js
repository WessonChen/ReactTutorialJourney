import React, { Component } from 'react';
import PropTypes from 'prop-types';

const updatedComponent = (OriginalComponent, incrementNumber) => {
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
                    count: prevState.count + incrementNumber
                };
            });
        }

        render() {
            return (
                <OriginalComponent
                    propsInHOC='propsInHOC'
                    count={this.state.count}
                    incrementByOne={this.incrementByOne} 
                    {... this.props}
                />
            );
        }
    }
    return NewComponent;
}

class ClickCounter extends Component {
    render() {
        const { propsInHOC, count, incrementByOne } = this.props;
        return (
            <button onClick={incrementByOne}>
                {propsInHOC} clicked {count} times
            </button>
        )
    }
}

class HoverCounter extends Component {
    render() {
        const { propsInHover, count, incrementByOne } = this.props;
        return (
            <h2 onMouseOver={incrementByOne}>
                {propsInHover} hovered {count} times
            </h2>
        )
    }
}

ClickCounter.propTypes = {
    propsInHOC: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

HoverCounter.propTypes = {
    propsInHover: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

export const ClickCounterHOC = updatedComponent(ClickCounter, 10);
export const HoverCounterHOC = updatedComponent(HoverCounter, 5);