import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import ThemeContainer from '../../components/theme-container/theme-container.component'
import { styles } from './theme.styles'
// import * as colors from '@material-ui/core/colors';
// console.log(colors)
// const map = {"1": 50, "2": 100, "3": 200, "4": 300, "5": 400, "6": 500, "7": 600, "8": 700, "9": 800, "10": 900, "11": "A100", 12: "A200", 13: "A400", 14: "A700"}




  


const ThemePage = ({classes}) => {
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>ThemePage</h1>
            <ThemeContainer/>
        </div>
    )
}

export default withStyles(styles)(ThemePage)
