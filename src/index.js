import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ObjectAsState } from './hooks/useState';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ObjectAsState />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
