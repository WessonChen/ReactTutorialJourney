import React from 'react';

// eslint-disable-next-line react/display-name
const FRChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

class FRParent extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <FRChild ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </>
        )
    }
}

export {FRParent}