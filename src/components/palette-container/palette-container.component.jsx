import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import * as colors from '@material-ui/core/colors';
import PaletteList from '../palette-list/palette-list.component'
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
    paletteContainer: {
        // backgroundColor: "green",
        width: "300px",
    },
    formControl: {

    },
    textField: {

    },

}


const PaletteContainer = ({classes}) => {
    const [level, setLevel] = React.useState(400)
    const [valueSlider, setValueSlider] = React.useState(5)
    const [valueColorHex, setValueColorHex] = React.useState('')
    const [hexColor, setHexColor] = React.useState('')

    const map = {1: 50, 2: 100, 3: 200, 4: 300, 5: 400, 6: 500, 7: 600, 8: 700, 9: 800, 10: 900, 11: "A100", 12: "A200", 13: "A400", 14: "A700"}

    // console.log(valueSlider,level)

    const changeLevel = (e, value) => {
        setLevel(map[value])
        setValueSlider(value)
    }

    const handleChange = (e) => {
        setValueColorHex(e.target.value)
    }

    React.useEffect(() => {
        setValueColorHex(hexColor)
        
    }, [hexColor])

    return (
        <div className={classes.paletteContainer}>
            <h1>ThemePage</h1>
            <h2>Level: {level}</h2>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple" value={valueColorHex} onChange={handleChange} />
            </FormControl>
            <Slider onChange={changeLevel} value={valueSlider} aria-labelledby="discrete-slider"  step={1} marks min={1} max={14}/>
            <PaletteList hexColor={hexColor} setHexColor={setHexColor} level={level} colors={colors}/>
        </div>
    )
}

export default withStyles(styles)(PaletteContainer)
