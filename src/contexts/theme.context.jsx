import React from 'react'

export const ThemeContext = React.createContext()


export const ThemeProvider = ({children}) => {
    const initialPalette = {
        lightMode: {background: "#f5f5f5", navbar: "#81c784", element: "white", mainColor: "#37474f"},
        darkMode: {background: "#263238", navbar: "#000", element: "black", mainColor: "#558b2f"}
    }
    const savedPalettes = JSON.parse(localStorage.getItem('themePalettePage'))
    
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const [mode, setMode] = React.useState(isDarkMode ? 'darkMode' : 'lightMode')
    const [paletteLightAndDark, setPaletteLightAndDark] = React.useState(savedPalettes ? savedPalettes : initialPalette)
    const [currentPalette, setCurrentPalette] = React.useState(savedPalettes ?  savedPalettes[mode] : initialPalette[mode])

    
    React.useEffect(() => {
        setMode(isDarkMode ? 'darkMode' : 'lightMode')
    }, [isDarkMode])

    React.useEffect(() => {
        setCurrentPalette(savedPalettes ? savedPalettes[mode] : initialPalette[mode]) 
        setPaletteLightAndDark(savedPalettes ?  savedPalettes : initialPalette) 
    }, [mode])

    return ( 
        <ThemeContext.Provider value={{mode, setMode, paletteLightAndDark, setPaletteLightAndDark, currentPalette, setCurrentPalette, isDarkMode, toggleTheme: () => setIsDarkMode(!isDarkMode)}}>
            {children}
        </ThemeContext.Provider>
    )
}



// import React from 'react'

// export const ThemeContext = React.createContext()

// export class ThemeProvider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isDarkMode: false };
//     }
//     render() {
//         return (
//             <ThemeContext.Provider value={{x: "qwerty", isDarkMode: this.state.isDarkMode, toggleTheme: () => this.setState({isDarkMode: !this.state.isDarkMode})}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }

