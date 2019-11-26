import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TitleChanger } from './hooks/useEffect';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <TitleChanger />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
