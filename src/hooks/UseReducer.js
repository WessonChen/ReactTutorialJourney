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

// -----------------------------------------------------------

const initialStateTwo = { 
    firstCounter: 0,
    secondCounter: 10
};
const reducerTwo = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement1':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset1':
            return { ...state, firstCounter: initialStateTwo.firstCounter};
        case 'reset2':
            return { ...state, secondCounter: initialStateTwo.secondCounter};
        default:
            return state;
    }
};

function CounterUseReducerTwo() {
    const [count, dispatch] = useReducer(reducerTwo, initialStateTwo);
    return (
        <>
            <p>First Count: {count.firstCounter}</p>
            <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment1', value: 3 })}>Add Three</button>
            <button onClick={() => dispatch({ type: 'reset1' })}>Reset</button>
            <br />
            <p>Second Count: {count.secondCounter}</p>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 3 })}>Add Three</button>
            <button onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
        </>
    );
}

export { CounterUseReducer, CounterUseReducerTwo };