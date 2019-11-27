import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CounterUseReducerThree } from './hooks/UseReducer';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CounterUseReducerThree />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
