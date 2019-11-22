import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CreateRefParent } from './components/Refs';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CreateRefParent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
