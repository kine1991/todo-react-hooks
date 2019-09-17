import { makeStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js'
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles(theme => ({
    navbar: {
        // backgroundColor: props => props.currentPalette.navbar,
        backgroundColor: theme.navbar,
        color: props =>  chroma(theme.navbar).luminance() >= 0.7 ? grey[900]: grey[100],
    },
    title: {
        flexGrow: 1
    },
    list: {
        width: "250px",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        padding: "0 1rem"
    },
}))