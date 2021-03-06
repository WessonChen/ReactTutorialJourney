import React, { useReducer, useContext } from 'react';

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
};

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
            return { ...state, firstCounter: initialStateTwo.firstCounter };
        case 'reset2':
            return { ...state, secondCounter: initialStateTwo.secondCounter };
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

// -----------------------------------------------------------

const initialStateThree = 0;
const reducerThree = (state, action) => {
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
};

function CounterUseReducerThree() {
    const [count, dispatch] = useReducer(reducerThree, initialStateThree);
    const [countTwo, dispatchTwo] = useReducer(reducerThree, initialStateThree);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <br />
            <p>Count: {countTwo}</p>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </>
    );
}

// -----------------------------------------------------------

const initialStateParent = 0;
const reducerParent = (state, action) => {
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
};
const CountContext = React.createContext();

function CounterParent() {
    const [count, dispatch] = useReducer(reducerParent, initialStateParent);
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <p>Count: {count}</p>
            <CounterChild />
        </CountContext.Provider>
    );
}

function CounterChild() {
    const countContext = useContext(CountContext);
    return (
        <>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </>
    );
}

export { CounterUseReducer, CounterUseReducerTwo, CounterUseReducerThree, CounterParent };