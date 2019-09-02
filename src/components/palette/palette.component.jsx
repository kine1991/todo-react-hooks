import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
    palette: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "60px",
        // height: props => props.showingFullPalette ? "20%" : "33.3333%",
    },
    icon: {
        color: "whitesmoke"
    }
})

const Palette = ({hexColor, colorName, classes, setSelectedHexColor, checked}) => {
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

export default withStyles(styles)(Palette)
