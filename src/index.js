import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ButtonClicker } from './hooks/useState';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ButtonClicker />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
