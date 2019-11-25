import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { GetExample, PostExample } from './components/HTTP';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <GetExample /> 
                <PostExample />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
