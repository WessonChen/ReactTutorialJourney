import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TheParent from './hooks/UseContext';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <TheParent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
