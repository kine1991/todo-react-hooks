import React from 'react'
import PaletteContainer from '../../components/palette-container/palette-container.component'
import SamplePage from '../../components/sample-page/sample-page.component'
// import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    themeContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1rem"
    },
    paletteContainer: {
        flex: 2,

        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent: "center",
        justifyItems: "center",

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "repeat(2, 1fr)"
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(1, 1fr)"
        },
        // [theme.breakpoints.down('sm')]: {
        //     gridTemplateColumns: "repeat(1, 1fr)"
        // },
    },
    samplePage: {
        flex: 1
    }
}));

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


