import React from 'react'

export const ThemeContext = React.createContext()


export const ThemeProvider = ({children}) => {
    const initialPalette = {
        lightMode: {background: 'white', navbar: 'blue', element: '#ffca28', mainColor: "black",  fontSize: "15px"},
        darkMode: {background: 'black', navbar: 'white', element: '#ffca28', mainColor: "white",  fontSize: "30px"},
    }
    const savedPalettes = JSON.parse(localStorage.getItem('themePalettePage'))
    
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const [mode, setMode] = React.useState('darkMode')
    const [paletteLightAndDark, setPaletteLightAndDark] = React.useState(savedPalettes ||  initialPalette)
    const [currentPalette, setCurrentPalette] = React.useState(savedPalettes[mode] ||  initialPalette[mode])
    
    // console.log(currentPalette)

    React.useEffect(() => {
        setMode(isDarkMode ? 'darkMode' : 'lightMode')
        setPaletteLightAndDark(savedPalettes ||  initialPalette) 
        setCurrentPalette(savedPalettes[mode] ||  initialPalette[mode]) 
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

