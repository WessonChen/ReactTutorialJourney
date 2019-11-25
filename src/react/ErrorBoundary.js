import React, { Component } from 'react';
import PropTypes from 'prop-types';

const heros = ['Batman', 'Superman', 'Joker'];

function Hero(props) {
    if (props.name === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            {props.name}
        </div>
    )
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return (
            this.props.children
        )
    }
}

function Heros() {
    const heroList = heros.map((h, i) => <ErrorBoundary key={i}><Hero name={h}/></ErrorBoundary>);
    return <>{heroList}</>
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
}

export default Heros