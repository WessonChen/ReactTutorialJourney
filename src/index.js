import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NoFragment, Fragment, Table, Glossary } from './components/Fragments';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <NoFragment />
                <Fragment />
                <Table />
                <Glossary />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
