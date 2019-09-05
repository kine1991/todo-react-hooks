import React from 'react'
import PaletteList from '../palette-list/palette-list.component'
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyles } from './palette-container.styles'
import { ThemeContext } from '../../contexts/theme.context'
import { PaletteContext } from '../../contexts/palette.context'

const PaletteContainer = ({ /*setColor, color,*/ typeElement}) => {
    const {mode , currentPalette, setCurrentPalette, paletteLightAndDark, setPaletteLightAndDark} = React.useContext(ThemeContext)
    const {level, setLevel, valueSlider, setValueSlider, valueHexColor, setValueHexColor, selectedHexColor} = React.useContext(PaletteContext)
    const classes = useStyles({currentPalette})

    const map = {1: 50, 2: 100, 3: 200, 4: 300, 5: 400, 6: 500, 7: 600, 8: 700, 9: 800, 10: 900, 11: "A100", 12: "A200", 13: "A400", 14: "A700"}

    const changeLevel = (e, value) => {
        setLevel(map[value])
        setValueSlider(value)
    }

    const handleChange = (e) => {
        setValueHexColor(e.target.value)
    }

    React.useEffect(() => {
        setValueHexColor(selectedHexColor)
        // selectedHexColor - изначально не выбран = null
        if(selectedHexColor){
            setCurrentPalette({...currentPalette, [typeElement]: selectedHexColor}) // {lightMode: {background: "#000", navbar: "#263238", element: "#000", mainColor: "#1b5e20", fontSize: "30px"}, darkMode: {background: "#000", navbar: "#263238", element: "#000", mainColor: "#1b5e20", fontSize: "30px"}}
        }
    }, [selectedHexColor])

    React.useEffect(() => {
        setPaletteLightAndDark({...paletteLightAndDark, [mode]: currentPalette})  // {background: "#000", navbar: "#263238", element: "#000", mainColor: "#1b5e20", fontSize: "30px"}
    }, [currentPalette])

    return (
        <div className={classes.paletteContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="component-simple">Hex</InputLabel>
                <Input className={classes.input} id="component-simple" disabled  value={valueHexColor} onChange={handleChange} />
            </FormControl>
            <Slider className={classes.slider} onChange={changeLevel} value={valueSlider} aria-labelledby="discrete-slider"  step={1} marks min={1} max={14}/>
            <div className={classes.lvlAndTypeEl}>
                <div>Level: {level}</div>
                <div>{typeElement}</div>
            </div> 
            <PaletteList /*selectedHexColor={selectedHexColor} setSelectedHexColor={setSelectedHexColor} level={level}*/ />
        </div>
    )
}


export default PaletteContainer






// import React from 'react'
// import * as colors from '@material-ui/core/colors';
// import PaletteList from '../palette-list/palette-list.component'
// import Slider from '@material-ui/core/Slider';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import { useStyles } from './palette-container.styles'

// const PaletteContainer = ({ setColor, color, typeElement}) => {
//     const classes = useStyles({color})
//     const [level, setLevel] = React.useState(400)
//     const [valueSlider, setValueSlider] = React.useState(5)
//     const [valueHexColor, setValueHexColor] = React.useState('')
//     const [selectedHexColor, setSelectedHexColor] = React.useState('')

//     const map = {1: 50, 2: 100, 3: 200, 4: 300, 5: 400, 6: 500, 7: 600, 8: 700, 9: 800, 10: 900, 11: "A100", 12: "A200", 13: "A400", 14: "A700"}

//     const changeLevel = (e, value) => {
//         setLevel(map[value])
//         setValueSlider(value)
//     }

//     const handleChange = (e) => {
//         setValueHexColor(e.target.value)
//     }

//     React.useEffect(() => {
//         setValueHexColor(selectedHexColor)
//         // selectedHexColor - изначально не выбран null
//         if(selectedHexColor){
//             setColor({...color, [typeElement]: selectedHexColor})    
//         }
//     }, [selectedHexColor])

//     return (
//         <div className={classes.paletteContainer}>
//             <FormControl className={classes.formControl}>
//                 <InputLabel htmlFor="component-simple">Hex</InputLabel>
//                 <Input className={classes.input} id="component-simple" disabled /*margin="dense"*/ value={valueHexColor} onChange={handleChange} />
//             </FormControl>
//             <Slider className={classes.slider} onChange={changeLevel} value={valueSlider} aria-labelledby="discrete-slider"  step={1} marks min={1} max={14}/>
//             <div className={classes.lvlAndTypeEl}>
//                 <div>Level: {level}</div>
//                 <div>{typeElement}</div>
//             </div>
//             <PaletteList selectedHexColor={selectedHexColor} setSelectedHexColor={setSelectedHexColor} level={level} colors={colors}/>
//         </div>
//     )
// }

// export default PaletteContainer
