import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src='https://img.icons8.com/pastel-glyph/64/000000/cat--v2.png' 
            style={{ position: 'absolute', left: mouse.x - 32, top: mouse.y - 32 }} 
            alt='A cat' />
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
            {/* Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render. */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

Cat.propTypes = {
    mouse: PropTypes.object.isRequired
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

export default MouseTracker