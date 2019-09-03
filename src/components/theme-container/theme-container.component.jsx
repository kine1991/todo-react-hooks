import React from 'react'
import PaletteContainer from '../../components/palette-container/palette-container.component'
import SamplePage from '../../components/sample-page/sample-page.component'
import { useStyles } from './theme-container.styles'

const ThemeContainer = () => {
    const classes = useStyles()
    const [color, setColor] = React.useState({background: 'white', navbar: 'blue', element: '#ffca28', mainColor: "black",  fontSize: "15px"})
    return (
        <div className={classes.themeContainer}>
            <div className={classes.paletteContainer}>
                <PaletteContainer typeElement="background" color={color}  setColor={setColor} />
                <PaletteContainer typeElement="navbar" color={color} setColor={setColor} />
                <PaletteContainer typeElement="element" color={color} setColor={setColor} />
                <PaletteContainer typeElement="mainColor" color={color} setColor={setColor} /> 
            </div>
            <div className={classes.samplePage}>
                <SamplePage color={color}/>
            </div>
        </div>
    )
}

export default ThemeContainer


