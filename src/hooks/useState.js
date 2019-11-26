import React, { useState } from 'react';

function ButtonClicker() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <>
            <p>Count {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </>
    )
}

function ObjectAsState() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <form>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <p>{JSON.stringify(name)}</p>
        </form>
    )
}

export { ButtonClicker, ObjectAsState }