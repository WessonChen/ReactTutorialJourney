import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Context from './components/Context';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Context />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
