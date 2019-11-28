import React, { useState, useEffect } from 'react';

function useDocumentTitleHook(count) {
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
}

function DocTitleChanger() {
    const [count, setCount] = useState(0);
    useDocumentTitleHook(count);

    return (
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    )
}

// --------------------------------------------------------

function useCounterHook(initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount);
    const increment = () => { setCount(prev => prev + value) };
    const decrement = () => { setCount(prev => prev - value) };
    const reset = () => { setCount(initialCount) };

    return [count, increment, decrement, reset];
}

function CounterUseCounterHook() {
    const [count, increment, decrement, reset] = useCounterHook(10, 5);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    );
}

// --------------------------------------------------------

function useInputHook(initialValue) {
    const [value, setValue] = useState(initialValue);
    const reset = () => { setValue(initialValue) };
    const bind = {
        value,
        onChange: e => { setValue(e.target.value) }
    };

    return [value, bind, reset];
}

function FormUseInputHook() {
    const [firstName, bindFirstName, resetFirstName] = useInputHook('');
    const [lastName, bindLastName, resetLastName] = useInputHook('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input id='firstName' type='text' {...bindFirstName} />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input id='lastName' type='text' {...bindLastName} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export { DocTitleChanger, CounterUseCounterHook, FormUseInputHook }