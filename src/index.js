import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ClickCounterHOC, HoverCounterHOC } from './components/HOC';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ClickCounterHOC />
                <HoverCounterHOC />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
