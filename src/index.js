import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CounterUseReducer } from './hooks/UseReducer';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CounterUseReducer />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
