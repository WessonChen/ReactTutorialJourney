# Table of Contents
## [0. React](#react)
[1. Components](#components)
[2. Functional Components vs Class Components](#functional-components-vs-class-components)
[3. JSX](#jsx)
[4. Props](#props)

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
```javascript
const Hello = () => {
    return (
        <div className='example'>
            <h1>Hellow World!</h1>
        </div>
    )
}
```

**Without JSX**
```javascript
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

### Props
- `props` is immutable, you cannot assign value to it in any circumstances
- `props` is an **object**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


function Greet(props) {
    console.log(props);
    let temp = props.heroName ? 'a.k.a ' + props.heroName : '';
    return (
        <div>
            <h1>Hello, {props.name} {temp}</h1>
            {props.children}
        </div>
    )
}

Greet.propTypes = {
    name: PropTypes.string.isRequired,
    heroName: PropTypes.string,
    children: PropTypes.array,
};

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Greet name='Bruce' heroName='Batman'>
                    <p>This is a children props</p>
                    <p>This is another children props</p>
                    <button>Go</button>
                </Greet>
                <Greet name='Clark' heroName='Superman' />
                <Greet name='Weicheng' />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

<p align="center">
  <img src="https://i.ibb.co/BTfbCtM/props-is-an-object.png">
</p>

The `PropTypes` in the code is optional, but it is a good practice to add type validation in the code since the javascript is a dynamic language.