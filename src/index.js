import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MouseTracker from './components/RenderProps';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <MouseTracker />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
