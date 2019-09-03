import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    paletteContainer: {
        minWidth: "250px",
        [theme.breakpoints.down('xs')]: {
            minWidth: "80%",
        },
    },
    formControl: {
    },
    lvlAndTypeEl: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5px",
        // padding: "0",
    },
    input: {
        marginBottom: theme.spacing(1),
    },
    button: {
        marginBottom: theme.spacing(1),
    },
    slider: {
        marginBottom: theme.spacing(1),
    }
}))