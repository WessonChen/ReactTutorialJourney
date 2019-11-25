import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { GetExample } from './components/HTTP';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <GetExample /> 
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
