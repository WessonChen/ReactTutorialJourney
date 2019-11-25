import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent',
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${typeof(childName) == 'string' ? childName : this.state.parentName}`)
    }

    render() {
        return <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    }
}

function ChildComponent(props) {
    return <div>
        <button onClick={props.greetHandler}>Greet Parent</button>
        <button onClick={() => props.greetHandler('Child')}>Greet Child</button>
    </div>
}

ChildComponent.propTypes = {
    greetHandler: PropTypes.func,
};

export { ParentComponent }