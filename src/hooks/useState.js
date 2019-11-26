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

export { ButtonClicker }