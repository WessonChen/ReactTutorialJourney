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

function MouseHook() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);
        console.log('useEffect called');
    }, []);

    return (
        <p>Mouse X: {x}, Y: {y}</p>
    );
}

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <MouseHook />}
        </>
    )
}

export { TitleChanger, MouseHook, MouseContainer }