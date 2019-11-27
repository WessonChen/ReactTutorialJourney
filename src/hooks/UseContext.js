import React, { useContext } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);
const UserContext = React.createContext();

function TheParent() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <UserContext.Provider value='Guest'>
                <TheChild />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function TheChild() {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <p style={{ background: theme.background, color: theme.foreground }}>
            {user}
        </p>
    )
}

export default TheParent