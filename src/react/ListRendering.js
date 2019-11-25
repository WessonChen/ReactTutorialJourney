import React from 'react'
import PropTypes from 'prop-types';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
        },
        {
            id: 2,
            name: 'Clark',
            age: 30,
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
        },
    ]
    const personList = persons.map(p => <Person key={p.id} p={p} />)
    return <div>{personList}</div>
}

function Person(props) {
    return <h2>I am {props.p.name}, I am {props.p.age} years old</h2>
}

Person.propTypes = {
    p: PropTypes.object,
}

export { NameList } 