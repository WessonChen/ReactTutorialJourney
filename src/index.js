import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Form } from './components/Form';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Form />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
