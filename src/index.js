import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { EventBind } from './components/EventHandler';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <EventBind />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
