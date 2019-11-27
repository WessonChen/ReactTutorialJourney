import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DataFetching } from './hooks/DataFetching';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <DataFetching />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
