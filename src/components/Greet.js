import React from 'react';
import PropTypes from 'prop-types';


function Greet(props) {
    console.log(props);
    const {name, heroName, children} = props
    let temp = heroName ? 'a.k.a ' + heroName : '';
    return (
        <div>
            <h1>Hello, {name} {temp}</h1>
            {children}
        </div>
    )
}

Greet.propTypes = {
    name: PropTypes.string.isRequired,
    heroName: PropTypes.string,
    children: PropTypes.node,
};

export default Greet