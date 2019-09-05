import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    pageContent: {
        color: props => props.currentPalette.mainColor,
        backgroundColor: props => props.currentPalette.background,
        minHeight: "100vh",
        width: "100vw",
    },
}))