import React from 'react'

export const ThemeContext = React.createContext()


export const ThemeProvider = ({children}) => {
    const initialPalette = {
        lightMode: {background: 'red', navbar: 'red', element: 'red', mainColor: "red",  fontSize: "lightMode"},
        darkMode: {background: 'blue', navbar: 'blue', element: 'blue', mainColor: "blue",  fontSize: "darkMode"},
    }
    const savedPalettes = JSON.parse(localStorage.getItem('themePalettePage'))
    
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const [mode, setMode] = React.useState('lightMode')
    const [paletteLightAndDark, setPaletteLightAndDark] = React.useState(savedPalettes ||  initialPalette)
    const [currentPalette, setCurrentPalette] = React.useState(savedPalettes[mode] ||  initialPalette[mode])
    
    // console.log(currentPalette)

    React.useEffect(() => {
        setMode(isDarkMode ? 'darkMode' : 'lightMode')
        setCurrentPalette(savedPalettes[mode] ||  initialPalette[mode]) 
        setPaletteLightAndDark(savedPalettes ||  initialPalette) 
    }, [isDarkMode])

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

