import React from 'react'
import PaletteContainer from '../../components/palette-container/palette-container.component'
import SamplePage from '../../components/sample-page/sample-page.component'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    themeContainer: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    paletteContainer: {
        flex: 2,
        display: "flex",
        justifyContent: "space-evenly",
    },
    samplePage: {
        flex: 1
    }
}

const ThemeContainer = ({classes}) => {
    const [color, setColor] = React.useState({background: '', navbar: '', button: '', fontSize: ''})

    return (
        <div className={classes.themeContainer}>
            <div className={classes.paletteContainer}>
                <PaletteContainer typeElement="background" color={color}  setColor={setColor} />
                <PaletteContainer typeElement="navbar" color={color} setColor={setColor} />
                <PaletteContainer typeElement="button" color={color} setColor={setColor} />
            </div>
            <div className={classes.samplePage}>
                <SamplePage color={color}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(ThemeContainer)


