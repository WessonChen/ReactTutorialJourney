import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LifecycleParent from './components/ComponentLifecycle';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <LifecycleParent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
