import chroma from 'chroma-js'
import { makeStyles } from '@material-ui/core/styles'; 

export const useStyles = makeStyles(theme => ({
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