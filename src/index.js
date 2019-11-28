import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DataFetchingTwo } from './hooks/DataFetching';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <DataFetchingTwo />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
