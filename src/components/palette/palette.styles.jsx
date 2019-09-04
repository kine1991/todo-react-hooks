import chroma from 'chroma-js'
import { makeStyles } from '@material-ui/core/styles'; 

export const useStyles = makeStyles(theme => ({
    palette: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        backgroundColor: props => props.hexColor,
        border: props => props.checked ? '1px solid white' : '1px solid transparent'
    },
    icon: {
        color: props =>  chroma(props.hexColor).luminance() >= 0.7 ? "black": "white",
    }
}))