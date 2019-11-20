# Table of Contents
## [React](#react-notes)
1. [Components](#components)
2. [Functional Components vs Class Components](#functional-components-vs-class-components)
3. [JSX](#jsx)
4. [Props](#props)
5. [State](#state)
6. [setState](#setstate)
7. [Destructuring props and state](#destructuring-props-and-state)
8. [Event Handling](#event-handling)
9. [List](#list)

# Notes
## React Notes
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

[Back to Table of Contents](#table-of-contents)

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

[Back to Table of Contents](#table-of-contents)

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

[Back to Table of Contents](#table-of-contents)

### Props
- `props` is **immutable**, you cannot assign value to it in any circumstances
- `props` is an **object**

```javascript
import React from 'react';
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

export default Greet
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './components/Greet'

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

The `PropTypes` in the code is optional, but it is always a good practice to add type validation to the code since the javascript is a dynamic language.

[Back to Table of Contents](#table-of-contents)

### State
`props` | `state`
:---: | :---:
`props` get passed to the component | `state` is managed within the component
Function parameters | Variables declared in the function body
`props` are immutable | `state` can be changed
`props` - Functional Components | `useState` Hood - Functional Components
`this.props` - Class Components | `this.state` - Class Components

```javascript
import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome visitor',
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button
                    onClick={() => this.changeMessage()}
                >Subscribe
                </button>
            </div>
        )
    }
}

export default Welcome
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Welcome />
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

- `state` is an object that is privately maintained inside the component
- `state` can influence what is rendered in the browser
- `state` can be changed within the component

In JavaScript classes, you need to always call `super` when defining the constructor of a subclass. All React component classes that have a `constructor` should start it with a `super(props)` call.

[Back to Table of Contents](#table-of-contents)

### setState
```javascript
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        }, () => { 
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }

    incrementFromPrev() {
        this.setState(p => ({
            count: p.count + 1
        }))
    }

    incrementThree() {
        this.increment()
        this.increment()
        this.increment()
    }

    incrementThreeFromPrev() {
        this.incrementFromPrev()
        this.incrementFromPrev()
        this.incrementFromPrev()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementThree()}>IncrementThree</button>
                <button onClick={() => this.incrementThreeFromPrev()}>IncrementThreeFromPrev</button>
            </div>
        )
    }
}

export default Counter
```

1. Do not mutate `state` directly. It will **not** re-render the UI. Instead, use `setState()` to notify `React` re-render the UI

2. `setState()` is an **async** method, if you want to use `await` feature, use the second (callback) argument like in `increment()`

<p align="center">
  <img src="https://i.ibb.co/JRvP8F7/set-State-async.png">
</p>

3. `React` will group multiple `setState()` calls into a single update for better performance like in `incrementThree()`

<p align="center">
  <img src="https://i.ibb.co/dWw6fpd/set-State-Grouped.png">
</p>

The updated value will not be carried over between the different calls

4. So, whenever you have to update the `state` based on the previous `state`, we need to pass a function as an argument to `setState()` method instead of passing in a regular object like in `incrementFromPrev()`

[Back to Table of Contents](#table-of-contents)

### Destructuring props and state
`props` and `state` can be destructured, so we can use them directly.

```javascript
function Greet({name, heroName}) {
    return (
        <div>
            <h1>Hello, {name} {heroName}</h1>
        </div>
    )
}
```

```javascript
function Greet(props) {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello, {name} {heroName}</h1>
        </div>
    )
}
```

```javascript
class Greet extends Component {
    render() {
        const {name, heroName} = this.props
        const {state1, state2} = this.state
        return (
            <div>
                <h1>Hello, {name} {heroName}</h1>
            </div>
        )
    }
}
```

[Back to Table of Contents](#table-of-contents)

### Event Handling
```javascript
import React, {Component} from 'react'

function FunctionClick() {
    function clickHander1() {
        console.log('Clicked1')
    }

    return (
        <div>
            <button onClick={clickHander1}>Click1</button>
        </div>
    )
}

class ClassClick extends Component {
    clickHander2() {
        console.log('Clicked2')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHander2}>Click2</button>
            </div>
        )
    }
}

export { FunctionClick, ClassClick }
```

Notice here we do not have `()`, because we pass `function` as `eventHandler`. If we use `()`, it becomes a function call.

Considering the following code
```javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello',
            isHello: true,
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: this.state.isHello ? 'Goodbye' : 'Hello',
    //         isHello: !this.state.isHello,
    //     })
    // }

    clickHandler() {
        this.setState({
            message: this.state.isHello ? 'Goodbye' : 'Hello',
            isHello: !this.state.isHello,
        })
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <div>{message}</div>
                <button onClick={this.clickHandler}>Error</button>
                <button onClick={this.clickHandler.bind(this)}>Call bind method</button>
                <button onClick={() => this.clickHandler()}>Use arrow function</button>
            </div>
        )
    }
}
```

If we click the first button, the page will crush, because the key word `this` in `clickHandler()` function is `undefined`. To fix this, we have several ways

1. In the second button, we bind the object `this` to the `clickHandler()` function using the key word `bind(this)` (Perfermance: Slower)
2. In the third button, we use arrow function. It **calls** the `eventHandler` in the body and returns the value (Perfermance: Slower)
3. Also, we can bind the object `this` in the `constructor`. Check the commented line in the `constructor`, the Error button will work if we enable this line. Because thie bind happends only once in the `constructor`, this is the quickest one (Recommented)
4. Last, using class property as arrow functions. If we comment the `clickHandler()` function and uncomment the `clickHandler` property, the Error button will work.

Even though the binding in `constructor` is the recommented way, but some times we need to use arrow function to pass data from child to parent.

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent',
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${typeof(childName) == 'string' ? childName : this.state.parentName}`)
    }

    render() {
        return <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    }
}

function ChildComponent(props) {
    return <div>
        <button onClick={props.greetHandler}>Greet Parent</button>
        <button onClick={() => props.greetHandler('Child')}>Greet Child</button>
    </div>
}

ChildComponent.propTypes = {
    greetHandler: PropTypes.func,
};

export { ParentComponent }
```

[Back to Table of Contents](#table-of-contents)

### List
Consider the following code
```javascript
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
```

Map will loop through a array and return a element for each item. And then assign the resulting array of elements to a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
//[2, 4, 6, 8, 10]
```

- A `key` is a special string attribute you need to include when creating lists of elements in `React`
- Keys give the elements a stable identity
- Keys help `React` identify which items have changed, are added, or are removed
- `key` helps in efficient update of the user interface by rendering the changed part only





















[Back to Table of Contents](#table-of-contents)















































































































