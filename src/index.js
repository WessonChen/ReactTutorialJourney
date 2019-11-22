import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Parent } from './components/Portals';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Parent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
