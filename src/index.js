import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './hooks/UseCallback';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ParentComponent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
