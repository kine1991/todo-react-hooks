import React from 'react'
import PaletteContainer from '../../components/palette-container/palette-container.component'
import SamplePage from '../../components/sample-page/sample-page.component'
import { useStyles } from './theme-container.styles'
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../../contexts/theme.context'

const ThemeContainer = () => {
    const classes = useStyles()
    const {currentPalette, setCurrentPalette} = React.useContext(ThemeContext)
    const setThemeIntoLS = () => {

        // localStorage.setItem('themePalettePage', JSON.stringify(color));
    }


    return (
        <div className={classes.themeContainer}>
            <div className={classes.paletteContainer}>
                <PaletteContainer typeElement="background" color={currentPalette}  setColor={setCurrentPalette} />
                <PaletteContainer typeElement="navbar" color={currentPalette} setColor={setCurrentPalette} />
                <PaletteContainer typeElement="element" color={currentPalette} setColor={setCurrentPalette} />
                <PaletteContainer typeElement="mainColor" color={currentPalette} setColor={setCurrentPalette} /> 
            </div>
            <div className={classes.samplePage}>
                <SamplePage color={currentPalette}/>
                <Button className={classes.button} onClick={setThemeIntoLS} variant="contained" color="primary">Apply</Button>
            </div>
        </div>
    )
}

export default ThemeContainer



// import React from 'react'
// import PaletteContainer from '../../components/palette-container/palette-container.component'
// import SamplePage from '../../components/sample-page/sample-page.component'
// import { useStyles } from './theme-container.styles'
// import Button from '@material-ui/core/Button';

// const ThemeContainer = () => {
//     const classes = useStyles()

//     const initialPalette = {
//         whitePalette: {background: 'white', navbar: 'blue', element: '#ffca28', mainColor: "black",  fontSize: "15px"},
//         darkPalette: {background: 'black', navbar: 'white', element: '#ffca28', mainColor: "white",  fontSize: "15px"},
//     }

//     const savedPalettes = JSON.parse(localStorage.getItem('themePage'))
//     const [color, setColor] = React.useState(savedPalettes || initialPalette['whitePalette'])
//     // console.log(color)
//     const setThemeIntoLS = () => {

//         localStorage.setItem('themePalettePage', JSON.stringify(color));
//     }


//     return (
//         <div className={classes.themeContainer}>
//             <div className={classes.paletteContainer}>
//                 <PaletteContainer typeElement="background" color={color}  setColor={setColor} />
//                 <PaletteContainer typeElement="navbar" color={color} setColor={setColor} />
//                 <PaletteContainer typeElement="element" color={color} setColor={setColor} />
//                 <PaletteContainer typeElement="mainColor" color={color} setColor={setColor} /> 
//             </div>
//             <div className={classes.samplePage}>
//                 <SamplePage color={color}/>
//                 <Button className={classes.button} onClick={setThemeIntoLS} variant="contained" color="primary">Apply</Button>
//             </div>
//         </div>
//     )
// }

// export default ThemeContainer


