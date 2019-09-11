import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    navbar: {
        // color: props => props.currentPalette.mainColor,
        backgroundColor: props => props.currentPalette.navbar,
    },
    title: {
        flexGrow: 1
    },
    list: {
        width: "250px",
    },
    link: {
        textDecoration: "none",
        color: "white",
        padding: "0 1rem"
        // outline: "none",
    },
    // "a": {
    //     textDecoration: "none"
    // }
}))