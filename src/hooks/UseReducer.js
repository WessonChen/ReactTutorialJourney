import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

    const addThree = () => {
        dispatch('increment');
        dispatch('increment');
        dispatch('increment');
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={addThree}>Add Three</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    );
}

export { CounterUseReducer }