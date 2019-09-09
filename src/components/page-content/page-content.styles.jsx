import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    pageContent: {
        color: props => props.currentPalette.mainColor,
        backgroundColor: props => props.currentPalette.background,
        minHeight: "150vh",
        width: "100vw",
    },
}))