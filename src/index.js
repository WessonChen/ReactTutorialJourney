import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CounterUseMemo from './hooks/UseMemo';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <CounterUseMemo />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
