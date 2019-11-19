import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


function Greet(props) {
    console.log(props);
    let temp = props.heroName ? 'a.k.a ' + props.heroName : '';
    return (
        <div>
            <h1>Hello, {props.name} {temp}</h1>
            {props.children}
        </div>
    )
}

Greet.propTypes = {
    name: PropTypes.string.isRequired,
    heroName: PropTypes.string,
    children: PropTypes.array,
};

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
