import React from 'react'
import { withStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/styles";
import * as colors from '@material-ui/core/colors';
import PaletteList from '../palette-list/palette-list.component'
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    paletteContainer: {
        // backgroundColor: "green",
        width: "260px",
    },
    formControl: {
        // display: "flex"
    },
    input: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginBottom: theme.spacing(2),
    },
    slider: {
        marginBottom: theme.spacing(2),
    }

})


const PaletteContainer = ({classes, setColor, color, typeElement}) => {
    const [level, setLevel] = React.useState(400)
    const [valueSlider, setValueSlider] = React.useState(5)
    const [valueHexColor, setValueHexColor] = React.useState('')
    const [selectedHexColor, setSelectedHexColor] = React.useState('')

    const map = {1: 50, 2: 100, 3: 200, 4: 300, 5: 400, 6: 500, 7: 600, 8: 700, 9: 800, 10: 900, 11: "A100", 12: "A200", 13: "A400", 14: "A700"}


    // React.useEffect(() => {
        // console.log(color)
    //     setX('red')
    // },)
 
    // setLevel2(43343)

    const changeLevel = (e, value) => {
        setLevel(map[value])
        setValueSlider(value)
    }

    const handleChange = (e) => {
        setValueHexColor(e.target.value)
    }

    React.useEffect(() => {
        setValueHexColor(selectedHexColor)
        // 
        setColor({...color, [typeElement]: selectedHexColor})    
    }, [selectedHexColor])

    return (
        <div className={classes.paletteContainer}>
            <h2>Level: {level}</h2>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="component-simple">Hex</InputLabel>
                <Input className={classes.input} id="component-simple" disabled margin="dense" value={valueHexColor} onChange={handleChange} />
                <Button variant="contained" color="primary" className={classes.button} style={{backgroundColor: selectedHexColor}}>Submit</Button>
            </FormControl>
            <Slider className={classes.slider} onChange={changeLevel} value={valueSlider} aria-labelledby="discrete-slider"  step={1} marks min={1} max={14}/>
            <PaletteList selectedHexColor={selectedHexColor} setSelectedHexColor={setSelectedHexColor} level={level} colors={colors}/>
        </div>
    )
}

export default withStyles(styles)(PaletteContainer)
