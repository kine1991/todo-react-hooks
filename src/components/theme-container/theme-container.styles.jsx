import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    themeContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        // margin: "3rem",
        // marginBottom: "2rem",
        // backgroundColor: "red !important",
        padding: "3rem",
        // margin: "3rem",

        [theme.breakpoints.down('sm')]: {
            // margin: "1rem",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "stretch",
        },
    },
    paletteContainers: {
        flex: 2,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent: "center",
        justifyItems: "center",
        
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(1, 1fr)",
            flex: 1,
        },
    },
    samplePage: {
        flex: 1,
        marginTop: "50px",
        margin: "0 auto"
    },
    button: {
        // textAlign: "center"
        // margin: "0 auto"
        marginTop: "1rem"
    }
}));
