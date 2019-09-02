import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import CheckIcon from "@material-ui/icons/Check";
import chroma from 'chroma-js'

const useStyles = makeStyles(theme => ({
    palette: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "60px",
        // height: props => props.showingFullPalette ? "20%" : "33.3333%",
    },
    icon: {
        color: props =>  chroma(props.hexColor).luminance() >= 0.7 ? "black": "white",
        // color: "whitesmoke"
    }
}))


const Palette = ({hexColor, colorName, setSelectedHexColor, checked}) => {
    const classes = useStyles({hexColor});

    const handleClick = () => {
        setSelectedHexColor(hexColor)
    }

    return (
        <div onClick={handleClick} className={classes.palette} style={ checked ? {backgroundColor: hexColor,  border: '1px solid white'} : {backgroundColor: hexColor,  border: '1px solid transparent'}}>
            {
                checked ? (<CheckIcon className={classes.icon} />) : null
            }
        </div>
    )
}

export default Palette
