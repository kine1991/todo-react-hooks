// export const styles = theme => ({

    
// })

import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    pageContent: {
        // backgroundColor: isDarkMode => isDarkMode ? 'black' : 'red',
        // backgroundColor: 'green !important',
        backgroundColor: props => props.currentPalette.background,
        minHeight: "100vh",
        width: "100vw",
        // padding: "3rem"
    },
}))