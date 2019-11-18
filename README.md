# Table of Contents
## [0. React](#react)
### [1. Components](#components)
### [2. Functional Components vs Class Components](#functional-components-vs-class-components)
### [3. JSX](#jsx)

# Notes
## React
### Components
1. Components describe a part of the user interface
2. They are re-usable and can be nested inside other components
3. Two types of components:
    - Stateless Functional Components
        ```javascript
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>
        }
        ```
    - Stateful Class Components
        ```javascript
        class Welcome extends React.Component (
            render() {
                return <h1>Hello, {this.props.name}</h1>
            }
        )
        ```

### Functional Components vs Class Components
1. Functional components
    - Simple functions
    - Use Func components as much as possible (quicker)
    - Absence of `this` keyword
    - Solution without using `state`
    - Mainly responsible for the UI
    - Also called Stateless/Dumb/Presentational components
2. Class components
    - More feature rich
    - Maintain their own **private** date - state
    - Complex UI logic
    - Provide lifecycle hooks
    - Also called Stateful/Smart/Container components

**Important: In the new version of React.js, hooks can be used in functional components with state as well.**

### JSX
JavaScript XML (JSX) - Extension to the JavaScript language syntax
- With the React library, it is an extension to write XML-like code for elements and components
- Like XML, JSX tags have a tag name, attributes and children
- JSX is not a necessity to write React application
- But it makes your React code simpler and elegant
- JSX ultimately transpiles to pure JavaScript which is understood by the browsers

**With JSX**
```JavaScript
const Hello = () => {
    return (
        <div className='example'>
            <h1>Hellow World!</h1>
        </div>
    )
}
```

**Without JSX**
```JavaScript
const Hello = () => {
    return React.createElement(
        'div', {className: 'example'}, React.createElement(
            'h1', null, 'Hello World!'
        )
    )
}
```

We are using `className` for `CSS` classes instead of `class` because the React is using `Class` for components, it is reserved for React. When we use `className` in `JSX` or `React.createElement()` the relust in `HTML` will still be `class`.

**JSX Differences**
1. Class -> className
2. for -> htmlFor
3. camelCase property naming convention
    - onclick -> onClick
    - tabindex -> tabIndex

