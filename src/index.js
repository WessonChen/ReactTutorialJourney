import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TimerUseRef } from './hooks/useRef';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <TimerUseRef />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
