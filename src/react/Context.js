import React from 'react';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');
const UserContext = React.createContext();

class Context extends React.Component {
    render() {
        return (
            <UserContext.Provider value='Guest'>
                <Toolbar />
            </UserContext.Provider>
        );
    }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <button>theme={theme} user={user}</button>
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Context