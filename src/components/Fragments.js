import React from 'react'

function NoFragment() {
    return (
        <div>
            <h1>No Fragment Example</h1>
            <p>This is some random text</p>
        </div>
    )
}

function Fragment() {
    return (
        <React.Fragment>
            <h1>Fragment Example</h1>
            <p>This is some random text</p>
        </React.Fragment>
    )
}

function Table() {
    return (
        <table>
            <tbody>
                <tr><Columns /></tr>
            </tbody>
        </table>
    )
}

function Columns() {
    return (
        <>
            <td>Name</td>
            <td>Weicheng</td>
        </>
    )
}

function Glossary() {
    const items = [{id: 1, term: 'a', description: 'A'}]
    return (
      <dl>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
}

export {NoFragment, Fragment, Table, Glossary}