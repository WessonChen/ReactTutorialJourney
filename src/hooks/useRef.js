import React, { useState, useEffect, useRef } from 'react';

function FocusUseRef() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type='text' />;
}

function TimerUseRef() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <p>Timer: {time}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </>
    );
}

export { FocusUseRef, TimerUseRef };