import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CounterParent } from './hooks/UseReducer';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CounterParent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
