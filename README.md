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
10. [Basic Form](#basic-form)
11. [Component Lifecycle](#component-lifecycle)
12. [Fragments](#fragments)
13. [Pure Components](#pure-components)
14. [Memo](#memo)
15. [Refs](#refs)
16. [Forwarding Refs](#forwarding-refs)
17. [Portals](#portals)
18. [Error Boundary](#error-boundary)
19. [Higher Order Components](#higher-order-components)
20. [Render Props](#render-props)
21. [Context](#context)
22. [HTTP](#http)

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
  <img src="https://i.ibb.co/dWw6fpd/set-State-Grouped.png" height="300">
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

Use `index` as `key`
```javascript
const personList = persons.map((p, index) => <Person key={index} p={p} />)
```

Do **not** use `index` as `key` unless 
1. The items in your list do not have a unique id. And
2. the list is a static list and will not change. And
3. the list will never be reordered orfiltered.

Because `React` uses `key` to judge which part changed then re-render that part. If we CRUD items in the list or sort/filter the list, the index might change, which causes display issue.

[Back to Table of Contents](#table-of-contents)

### Basic Form
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            topic: 'react',
            topics: [],
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleTopicsChange = this.handleTopicsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleCommentsChange(event) {
        this.setState({
            comments: event.target.value,
        });
    }

    handleTopicChange(event) {
        this.setState({
            topic: event.target.value,
        });
    }

    handleTopicsChange(event) {
        this.setState({
            topics: Array.from(event.target.selectedOptions, (item) => item.value),
        });
    }

    handleSubmit(event) {
        alert(`
            Username: ${this.state.username} \n 
            Comments: ${this.state.comments} \n
            Topic: ${this.state.topic} \n
            Topics: ${this.state.topics}
        `);
        event.preventDefault();
    }

    render() {
        const { username, comments, topic, topics } = this.state;
        const skills = ['Angular', 'React', 'Vue'];
        const skillsOptions = skills.map(s => <Options key={s.toLowerCase()} skill={s} />);

        return (
            <form onSubmit={this.handleSubmit} className='basic-form'>
                <div className='text-input'>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div className='textarea'>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div className='single-select'>
                    <label>Topic</label>
                    <select
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        {skillsOptions}
                    </select>
                </div>
                <div className='multiple-select'>
                    <label>Topics</label>
                    <select
                        multiple={true}
                        value={topics}
                        onChange={this.handleTopicsChange}
                    >
                        {skillsOptions}
                    </select>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        );
    }
}

function Options(props) {
    return <option value={props.skill.toLowerCase()}>{props.skill}</option>
}

Options.propTypes = {
    skill: PropTypes.string,
}

export { Form }
```
Check [Official Docs](#https://reactjs.org/docs/forms.html) for more info.
Also, we can use a third-part library [Formik](#https://github.com/jaredpalmer/formik) for form validation.

[Back to Table of Contents](#table-of-contents)

### Component Lifecycle
1. **Mounting**

    These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    - `constructor()`
    - `static getDerivedStateFromProps()`
    - `render()`
    - `componentDidMount()`

2. **Updating**

    An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
    - `static getDerivedStateFromProps()`
    - `shouldComponentUpdate()`
    - `render()`
    - `getSnapshotBeforeUpdate()`
    - `componentDidUpdate()`

3. **Unmounting**

    This method is called when a component is being removed from the DOM:
    - `componentWillUnmount()`

4. **Error Handling**

    These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
    - `static getDerivedStateFromError()`
    - `componentDidCatch()`

Check [Official Docs](https://reactjs.org/docs/react-component.html) for more info.

#### Mounting Lifecycle Methods

1. `constructor(props)`
    - A special function that will get called whenever a new component is created
    - Used for initializing state and binding the event handlers
    - Should not cause side effects like HTTP requests
    - Has to call `super(props)` and then directly overwrite `this.state`, this is the only place to set `state` by `this.state`

2. `static getDerivedStateFromProps(props, state)`
    - rarely used when the `state` of the component depends on changes in `props` over time
    - set the `state` by returning a state **object**
    - Should not cause side effects like HTTP requests

3. `render()`
    - The only required method
    - Read `props` & `state` and return JSX
    - It is a pure component, do not change `state` or interact with DOM or make ajax calls
    - Right after rending the parent method, children components lifecycle methods are also executed

4. `componentDidMount()`
    - Will be called only once in a component. Invoked immediately after a component and all its children components have been rendered to the DOM
    - It is the prefect place to cause side effects like interact will the DOM or perform any ajax calls to load data

```javascript
/* eslint-disable no-unused-vars */
import React, {Component} from 'react'

class LifecycleParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        console.log('LifecycleParent constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleParent getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleParent componentDidMount')
    }

    render() {
        console.log('LifecycleParent render')
        return <div>
            Parent
            <LifecycleChild />
        </div>
    }
}

class LifecycleChild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        console.log('LifecycleChild constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleChild getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleChild componentDidMount')
    }

    render() {
        console.log('LifecycleChild render')
        return <div>
            Child
        </div>
    }
}

export default LifecycleParent
```

<p align="center">
  <img src="https://i.ibb.co/wB3kjpB/Mounting-Lifecycle-Methods.png">
</p>

#### Updating Lifecycle Methods

1. `static getDerivedStateFromProps(props, state)`
    - rarely used when the `state` of the component depends on changes in `props` over time
    - set the `state` by returning a state **object**
    - Should not cause side effects like HTTP requests

2. `shouldComponentUpdate(nextProps, nextState)`
    - Dictates if the component should re-render or not
    - By default, components will render whenever the `props` they receive or their `state` changes. This method can prevent the default behavior by returning `false`
    - For performance optimization
    - Should not cause side effects like HTTP requests or calling the `setState` method

3. `render()`
    - The only required method
    - Read `props` & `state` and return JSX
    - It is a pure component, do not change `state` or interact with DOM or make ajax calls
    - Right after rending the parent method, children components lifecycle methods are also executed

4. `getSnapshotBeforeUpdate(prevProps, prevState)`
    - Called right before the changes from the virtural DOM are to be reflected in the DOM
    - Capture some information from the DOM
    - Method will either return `null` or return a value. Returned value will be passed as the third parameter to the `componentDidUpdate()`

5. `componentDidUpdate(prevProps, prevState, snapshot)`
    - Called after the render is finished in the re-render cycles
    - Is guaranteed once and once only in a re-render lifecycle. So you can cause side effects

```javascript
/* eslint-disable no-unused-vars */
import React, {Component} from 'react'

class LifecycleParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        };
        this.changeState = this.changeState.bind(this)
        console.log('LifecycleParent constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleParent getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleParent componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleParent shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleParent getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleParent componentDidUpdate')
    }

    changeState() {
        this.setState({
            name: ''
        })
        console.log('------State Changed------')
    }

    render() {
        console.log('LifecycleParent render')
        return <div>
            <button onClick={this.changeState}>
                Change State
            </button>
            <LifecycleChild />
        </div>
    }
}

class LifecycleChild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        console.log('LifecycleChild constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleChild getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleChild componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleChild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleChild getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleChild componentDidUpdate')
    }

    render() {
        console.log('LifecycleChild render')
        return <div></div>
    }
}

export default LifecycleParent
```

<p align="center">
  <img src="https://i.ibb.co/XY0JZnT/Updating-Lifecycle-Methods.png">
</p>

#### Unmounting Lifecycle Methods

1. `componentWillUnmount()`
    - Method is invoked immediately before a component is unmounted and destroyed
    - Can preform tasks like cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
    - Do not call the `setState` method

#### Error Handling Lifecycle Methods
1. `static getDerivedStateFromError()`
2. `componentDidCatch()`

    - Called when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component

[Back to Table of Contents](#table-of-contents)

### Fragments

Fragments let you group a list of children elements without adding extra nodes to the DOM. For example

```javascript
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

export {NoFragment, Fragment}
```

<p align="center">
    <img src="https://i.ibb.co/Xk1V0Dj/Fragments.png" height="200">
</p>

And in `table` elements, `td` cannot have a child of `div`. For that, we can use fragment

```javascript
function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
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
```

You can use `<></>` the same way you’d use any other element except that it doesn’t support `keys` or `attributes`.

```javascript
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
```

[Back to Table of Contents](#table-of-contents)

### Pure Components

**Regular Component** | **Pure Component**
:---: | :---:
A regular component does not implement the `shouldComponentUpdate` method. It always returns `true` by default | A pure component on the other hand implements `shouldComponentUpdate` with a shallow `props` and `state` comparison

```javascript
import React from 'react';
import PropTypes from 'prop-types';

class PureComponent extends React.PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

class RegularComponent extends React.Component {
    render() {
        console.log('Regular Component Render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: ''
            })
        }, 5000)
    }

    render() {
        console.log('------Parant Component Render------')
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} />
                <PureComponent name={this.state.name} />
            </div>
        )
    }
}

PureComponent.propTypes = {
    name: PropTypes.string,
};

RegularComponent.propTypes = {
    name: PropTypes.string,
};

export { ParentComponent }
```

<p align='center'>
    <img src='https://i.ibb.co/hLxxPdv/Pure-Component.png'>
</p>

`React.PureComponent`’s `shouldComponentUpdate()` only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. **Only extend** `PureComponent` when you expect to have simple `props` and `state`, or use [forceUpdate()](https://reactjs.org/docs/react-component.html#forceupdate) when you know deep data structures have changed. Or, consider using [immutable objects](https://immutable-js.github.io/immutable-js/) to facilitate fast comparisons of nested data.

Furthermore, `React.PureComponent`’s `shouldComponentUpdate()` **skips** prop updates for the whole component subtree. Make sure all the children components are also “pure”.

**Shallow Comparison (SC)**

**For Primitive Types** | **For Complex Types**
:---: | :---:
`a (SC) b` returns `true` if `a` and `b` have the same value and are of the same type | `a (SC) b` returns `true` if `a` and `b` reference the exact same object
string `name` (SC) string `name` returns `true` | var a = [1, 2]; var b = [1, 2]; var c = a; var a_eq_b = (a===b); //`false`; var a_eq_c = (a===c); //`true`

[Back to Table of Contents](#table-of-contents)

### Memo

`React.memo` is similar to `React.PureComponent` but for function components instead of classes.

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

Example:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const MemoComponent = React.memo(function MemoComponent(props) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {props.name}
        </div>
    )
});

MemoComponent.propTypes = {
    name: PropTypes.string,
}

class MemoComponentParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: ''
            })
        }, 5000)
    }

    render() {
        console.log('------Parant Component Render------')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export {MemoComponentParent}
```

If your function component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

```javascript
function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);
```

This method only exists as a performance optimization. **Do not** rely on it to “prevent” a render, as this can lead to bugs.

Unlike the `shouldComponentUpdate()` method on class components, the `areEqual` function returns `true` if the props are equal and `false` if the props are not equal. This is the inverse from `shouldComponentUpdate`.

[Back to Table of Contents](#table-of-contents)

### Refs

Refs provide a way to access DOM nodes or React elements created in the render method.

In the typical React dataflow, `props` are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

**When to Use Refs**
There are a few good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

**Don’t Overuse Refs**

Your first inclination may be to use refs to “make things happen” in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy. See the [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) guide for examples of this.

**Refs and Function Components**

You may not use the ref attribute **on** function components because they don’t have instances:

```javascript
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
```

You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

You can, however, use the ref attribute **inside** a function component as long as you refer to a DOM element or a class component:

```javascript
function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```

This is a example of how to create refs, access refs and how to use callback refs in older version.

```javascript
import React, { Component } from 'react';

class CreateRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.callBackRef = null;
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        };
        this.clickHandlerChild = this.clickHandlerChild.bind(this);
    }

    componentDidMount() {
        if (this.callBackRef) {
            this.callBackRef.focus();
        }
    }

    clickHandlerChild() {
        let node = this.inputRef.current;
        node.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCallBackRef} />
                <button onClick={this.clickHandlerChild}>Click from child to focus</button>
            </div>
        );
    }
}

class CreateRefParent extends Component {
    constructor(props) {
        super(props);
        this.textInputRef = React.createRef();
        this.clickHandlerParent = this.clickHandlerParent.bind(this);
    }

    clickHandlerParent() {
        this.textInputRef.current.clickHandlerChild();
    }

    render() {
        return (
            <>
                <CreateRef ref={this.textInputRef} />
                <button onClick={this.clickHandlerParent}>Click from parent to focus</button>
            </>
        );
    }
}

export { CreateRefParent }
```

[Back to Table of Contents](#table-of-contents)

### Forwarding Refs

```javascript
import React from 'react';

// eslint-disable-next-line react/display-name
const FRChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

class FRParent extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <FRChild ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </>
        )
    }
}

export {FRParent}
```

In this example, the arrow function is passed as a parameter to the `React.forwardRef()`. We know that every functional component receives `props` as its parameter, but when a component is passed as a parameter to the `React.forwardRef()` method, it recieves `ref` attribute as its second parameter. We can use this `ref` parameter and pass it as a value to the `ref` attribute on the native input element. So, `ref={ref}` assigns the `ref` from the parameter which from the parent component. Or in the other words, the `ref` is being forwarded from the parent component to the native input element.

[Back to Table of Contents](#table-of-contents)

### Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```javascript
ReactDOM.createPortal(child, container)
```

The first argument `child` is any renderable React child, such as an element, string, or fragment. The second argument `container` is a DOM element.

For example,

```javascript
function Normal() {
    return (
        <h1>Portal</h1>
    )
}

function Portal() {
    return ReactDOM.createPortal(
        <h1>Portal</h1>, document.getElementById('portal')
    )
}
```

The function `Normal` will render the `h1` to `root` element, and the function `Portal` will render the `h1` to `portal` element. Features like context work exactly the same regardless of whether the child is a portal, as the portal still exists in the React tree regardless of position in the DOM tree.

**Event Bubbling Through Portals**

Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal');

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children, modalRoot
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.
        </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}

export { Parent }
```

[Back to Table of Contents](#table-of-contents)

### Error Boundary

A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch()`. Use `static getDerivedStateFromError()` to render a fallback UI after an error has been thrown. Use `componentDidCatch()` to log error information.

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const heros = ['Batman', 'Superman', 'Joker'];

function Hero(props) {
    if (props.name === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            {props.name}
        </div>
    )
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return (
            this.props.children
        )
    }
}

function Heros() {
    const heroList = heros.map((h, i) => <ErrorBoundary key={i}><Hero name={h}/></ErrorBoundary>);
    return <>{heroList}</>
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
}

export default Heros
```

<p align='center'>
    <img src='https://i.ibb.co/8zNtR7K/Error-Boundary.png' height='350'>
</p>

[Back to Table of Contents](#table-of-contents)

### Higher Order Components

A higher-order component (HOC) is an advanced technique in React for reusing component logic.

For example, we may have lots of components which contains `counter` function by increasing state by 1. In this case, HOC helps to share common functionality between components.

HOC is a pattern where a function takes a component as an argument and returns a new component.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent)
// const IronMan = withSuit(TonyStark)
```

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const updatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            this.incrementByOne = this.incrementByOne.bind(this);
        }

        incrementByOne() {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                };
            });
        }

        render() {
            return (
                <OriginalComponent
                    propsInHOC='propsInHOC'
                    count={this.state.count}
                    incrementByOne={this.incrementByOne} 
                    {... this.props}
                />
            );
        }
    }
    return NewComponent;
}

class ClickCounter extends Component {
    render() {
        const { propsInHOC, count, incrementByOne } = this.props;
        return (
            <button onClick={incrementByOne}>
                {propsInHOC} clicked {count} times
            </button>
        )
    }
}

class HoverCounter extends Component {
    render() {
        const { propsInHover, count, incrementByOne } = this.props;
        return (
            <h2 onMouseOver={incrementByOne}>
                {propsInHover} hovered {count} times
            </h2>
        )
    }
}

ClickCounter.propTypes = {
    propsInHOC: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

HoverCounter.propTypes = {
    propsInHover: PropTypes.string,
    count: PropTypes.any,
    incrementByOne: PropTypes.func
}

export const ClickCounterHOC = updatedComponent(ClickCounter, 10);
export const HoverCounterHOC = updatedComponent(HoverCounter, 5);
```

```javascript
class App extends Component {
    render() {
        return (
            <div className='app'>
                <ClickCounterHOC />
                <HoverCounterHOC propsInHover='propsInHover'/>
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

Notice that when we set `props` in `original class`, the `props` is set down to `HOC`, not the `original class`. To use those `props` we need to pass the remaining `props` in `HOC` by using `{... this.props}`.

[Back to Table of Contents](#table-of-contents)

### Render Props

A render prop is a function prop that a component uses to know what to render. This technique makes the behavior that we need to share extremely portable.

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src='https://img.icons8.com/pastel-glyph/64/000000/cat--v2.png' 
            style={{ position: 'absolute', left: mouse.x - 32, top: mouse.y - 32 }} 
            alt='A cat' />
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
            {/* Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render. */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

Cat.propTypes = {
    mouse: PropTypes.object.isRequired
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

export default MouseTracker
```

[Back to Table of Contents](#table-of-contents)

### Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

**When to Use Context**

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

```javascript
import React from 'react';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');
const UserContext = React.createContext();

class Context extends React.Component {
    render() {
        return (
            <UserContext.Provider value='Guest'>
                <Toolbar />
            </UserContext.Provider>
        );
    }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <button>theme={theme} user={user}</button>
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Context
```

[Back to Table of Contents](#table-of-contents)

### HTTP

We are using [Axios](#https://github.com/axios/axios) in this section.

Example of `Get` and `Post`

```javascript
import React, { Component } from 'react';
import Axios from 'axios';

class GetExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <>
            </>
        );
    }
}

class PostExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBodyChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleTitleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleUserIdChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => (
                console.log(response)
            ))
            .catch(error => (
                console.log(error)
            ));
    }

    render() {
        const { userId, title, body } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='userId'>User Id</label>
                    <input
                        type='number'
                        value={userId}
                        onChange={this.handleUserIdChange} 
                        id='userId' 
                        name='userId'
                    />
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={this.handleTitleChange}
                        id='title'
                        name='title'
                    />
                </div>
                <div>
                    <label htmlFor='body'>Body</label>
                    <textarea
                        value={body}
                        onChange={this.handleBodyChange}
                        id='body' 
                        name='body'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export { GetExample, PostExample }
```

[Back to Table of Contents](#table-of-contents)

















































































