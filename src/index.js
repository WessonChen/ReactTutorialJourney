import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FRParent } from './components/ForwardingRefs';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <FRParent />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
