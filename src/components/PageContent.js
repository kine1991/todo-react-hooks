import React from 'react'
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from '../contexts/ThemeContext'

const styles = theme => ({
    light: {
        backgroundColor: theme.palette.common.white[100],
        height: "100vh",
        width: "100vw",
    },
    dark: {
        backgroundColor: theme.palette.common.black[800],
        height: "100vh",
        width: "100vw",
    },
})

class PageContent extends React.Component {
  static contextType = ThemeContext
  render() {
    const {isDarkMode} = this.context
    const {classes} = this.props
    console.log(isDarkMode)
    return (
      <Paper className={isDarkMode ? classes.dark : classes.light}> 
        {this.props.children}
      </Paper>
    )
  }
}

export default withStyles(styles)(PageContent) 