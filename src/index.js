import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { MouseContainer } from './hooks/useEffect';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <MouseContainer />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
