import React from 'react'
import CheckIcon from "@material-ui/icons/Check";
import { useStyles } from './palette.styles'


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
