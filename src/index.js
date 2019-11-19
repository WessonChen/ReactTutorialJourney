import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './components/Greet'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Greet name='Bruce' heroName='Batman'>
                    <p>This is a children props</p>
                    <p>This is another children props</p>
                    <button>Go</button>
                </Greet>
                <Greet name='Clark' heroName='Superman' />
                <Greet name='Weicheng' />
            </div>
        );
    }
}

//-------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
