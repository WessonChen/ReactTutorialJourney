import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CreateRef } from './components/Refs';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CreateRef />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
