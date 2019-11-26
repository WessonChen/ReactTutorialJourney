import React, { useState, useEffect } from 'react';

function TitleChanger() {
    const [count, setCount] = useState(0);
    const [useEffectCount, setUseEffectCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `${count} times`;
        setUseEffectCount(prev => prev + 1);
    }, [count]);

    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>Title Count Adder</button>
            <p>The useEffect updated {useEffectCount} times</p>
            <input type='text' value={name} onChange={n => setName(n.target.value)}></input>
        </>
    )
}

export { TitleChanger }