import React from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    palette: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black"
        // height: props => props.showingFullPalette ? "20%" : "33.3333%",
    }
}

const Palette = ({colorHex, colorName, classes, setHexColor}) => {
    const [checked, setChecked] = React.useState(false)

    const handleClick = () => {
        setHexColor(colorHex)
    }

    return (
        <div onClick={handleClick} className={classes.palette} style={ checked ? {backgroundColor: colorHex,  border: '1px solid red'} : {backgroundColor: colorHex,  border: '1px solid black'}}>
            {colorName}
        </div>
    )
}

export default withStyles(styles)(Palette)
