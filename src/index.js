import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CounterUseReducerTwo } from './hooks/UseReducer';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CounterUseReducerTwo />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
