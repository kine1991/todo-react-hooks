import React from 'react'

export const ThemeContext = React.createContext()

export class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDarkMode: false };
    }
    render() {
        return (
            <ThemeContext.Provider value={{x: "qwerty", isDarkMode: this.state.isDarkMode, toggleTheme: () => this.setState({isDarkMode: !this.state.isDarkMode})}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

