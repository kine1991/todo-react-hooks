import React from 'react'
import CheckIcon from "@material-ui/icons/Check";
import { useStyles } from './palette.styles'
import { PaletteContext } from '../../contexts/palette.context'


const Palette = ({hexColor}) => {
    const {setSelectedHexColor, selectedHexColor} = React.useContext(PaletteContext)
    const checked = selectedHexColor === hexColor
    
    const classes = useStyles({hexColor, checked});
    return (
        <div onClick={() => setSelectedHexColor(hexColor)} className={classes.palette}>
            {checked ? (<CheckIcon className={classes.icon} />) : null}
        </div>
    )
}

export default Palette
