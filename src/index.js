import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NameList } from './components/ListRendering';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <NameList />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
