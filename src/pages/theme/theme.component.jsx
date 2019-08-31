import React from 'react'
import * as colors from '@material-ui/core/colors';
import { withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import PaletteContainer from '../../components/palette-container/palette-container.component'


console.log(colors)

const styles = {
    root: {
        width: "100px",
        marginLeft: "100px"
    },
    // palettes: {
    //     display: "grid",
    //     gridTemplateColumns: "repeat(4, 1fr)",
    // },
    // palette: {

    //     height: "40px",
    // }
}


  

const map = {"1": 50, "2": 100, "3": 200, "4": 300, "5": 400, "6": 500, "7": 600, "8": 700, "9": 800, "10": 900, "11": "A100", 12: "A200", 13: "A400", 14: "A700"}

const ThemePage = ({classes}) => {
    const [level, setLevel] = React.useState(500)

    const changeLevel = (e, value) => {
        // console.log(value)
        // console.log(map[value])
        // console.log(level[value])
        setLevel(map[value])
    }

    React.useEffect(() => {
        // console.log(level)
    }, [level])
    // console.log(level)
    return (
        <div className={classes.root}>
            <PaletteContainer/>
            {/* <h1>ThemePage</h1>
            <h2>Level: {level}</h2>
            <Slider onChangeCommitted={changeLevel} defaultValue={6} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} marks min={1} max={14}/>
            <div className={classes.palettes}>
                {
                    Object.keys(colors).splice(1).map((color, i) => {
                        console.log(colors[color][level])
                        return (
                            <div className={classes.palette} style={{backgroundColor: colors[color][level]}} key={i}>
                                
                            </div>
                        )
                    })
                }

            </div> */}
        </div>
    )
}

export default withStyles(styles)(ThemePage)
