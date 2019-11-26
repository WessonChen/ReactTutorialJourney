import React, { useState, useEffect } from 'react';

function TitleChanger() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} times`
    });

    return (
        <button onClick={() => setCount(prev => prev + 1)}>Count Adder</button>
    )
}

export { TitleChanger }