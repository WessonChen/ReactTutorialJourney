import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DocTitleChanger, CounterUseCounterHook, FormUseInputHook } from './hooks/CustomHook';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <DocTitleChanger />
                <CounterUseCounterHook />
                <FormUseInputHook />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
