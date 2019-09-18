import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    author: {
        display: "flex",
        justifyContent: "space-between",
        "& > *": {
            flexBasis: "48%"

        }
    },
    button: {
        margin: "1rem 0"
    }
})) 
