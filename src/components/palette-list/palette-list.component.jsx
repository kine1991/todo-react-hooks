import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Palette from '../palette/palette.component'


const styles = {
    paletteList: {
        width: "260px",
        height: "260px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        
    }
}



const PaletteList = ({colors, level, classes, setSelectedHexColor, selectedHexColor}) => {
    

    // добавляет к палитре белый и черный цвета
    const fullColors = {...colors, white: {50: "#fff", 100: "#fff", 200: "#fff", 300: "#fff", 400: "#fff", 500: "#fff", 600: "#fff", 700: "#fff", 800: "#fff", 900: "#fff", "A100": "#fff", "A200": "#fff", "A400": "#fff", "A700": "#fff"}, black: {50: "#000", 100: "#000", 200: "#000", 300: "#000", 400: "#000", 500: "#000", 600: "#000", 700: "#000", 800: "#000", 900: "#000", "A100": "#000", "A200": "#000", "A400": "#000", "A700": "#000"}}

    return (
        <div className={classes.paletteList}>
            {
                Object.keys(fullColors).splice(1).map((color, i) => {
                    const hexColor = fullColors[color][level]
                    return (
                        <Palette checked={selectedHexColor === hexColor} setSelectedHexColor={setSelectedHexColor} key={i} colorName={color} hexColor={hexColor}/>
                    )
                })

                // Object.keys(colors).splice(1).map((color, i) => {
                //     return (
                //         <Palette setSelectedHexColor={setSelectedHexColor} key={i} colorName={color} hexColor={colors[color][level]}/>
                //     )
                // })
            }
        </div>
    )
}

export default withStyles(styles)(PaletteList)
