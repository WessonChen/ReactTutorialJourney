import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Welcome />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
