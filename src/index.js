import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { UserGreeting } from './components/ConditionalRendering';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <UserGreeting />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
