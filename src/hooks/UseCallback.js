import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <>
            <Title>useCallback Hook</Title>
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}

const Title = React.memo(function Title({ children }) {
    console.log('Rendering Title');
    return <h2>{children}</h2>
});
Title.propTypes = {
    children: PropTypes.node
}

const Count = React.memo(function Count({ text, count }) {
    console.log(`Rendering ${text}`);
    return <p>{text}: {count}</p>
});
Count.propTypes = {
    text: PropTypes.string,
    count: PropTypes.number
}

const Button = React.memo(function Button({ handleClick, children }) {
    console.log(`Rendering button: `, children);
    return <button onClick={handleClick}>{children}</button>
});
Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.node
}

export default ParentComponent;