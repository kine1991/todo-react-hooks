
import React from 'react'
import * as colors from '@material-ui/core/colors';
export const PaletteContext = React.createContext()

export const PaletteProvider = ({children}) => {

    const [level, setLevel] = React.useState(900)
    const [valueSlider, setValueSlider] = React.useState(5)
    const [valueHexColor, setValueHexColor] = React.useState('')
    const [selectedHexColor, setSelectedHexColor] = React.useState('')

    // добавляет к палитре белый и черный цвета
    const fullColors = {...colors, white_black: {50: "#fff", 100: "#fff", 200: "#fff", 300: "#fff", 400: "#fff", 500: "#fff", 600: "#000", 700: "#000", 800: "#000", 900: "#000", "A100": "#fff", "A200": "#fff", "A400": "#000", "A700": "#000"}}

    return (
        <PaletteContext.Provider value={{fullColors, colors, level, setLevel, valueSlider, setValueSlider, valueHexColor, setValueHexColor, selectedHexColor, setSelectedHexColor}}>
            {children}
        </PaletteContext.Provider>
    )
}



