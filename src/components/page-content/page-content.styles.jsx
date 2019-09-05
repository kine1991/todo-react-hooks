// export const styles = theme => ({

    
// })

import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    PageContent: {
        backgroundColor: currentPalette => currentPalette.background,
        height: "100%",
        width: "100vw",

    }
}))