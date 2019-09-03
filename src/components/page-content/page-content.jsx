import React from 'react'
// import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from '../../contexts/theme.context.jsx'

// import {amber ,blue ,blueGrey,brown ,common ,cyan ,deepOrange,deepPurple ,green ,grey,indigo,lightBlue,lightGreen ,lime,orange,pink,purple ,red ,teal,yellow } from '@material-ui/core/colors';


const styles = theme => ({
    light: {
        backgroundColor: "white",
        height: "100%",
        width: "100vw",
    },
    dark: {
        backgroundColor: "black",
        height: "100%",
        width: "100vw",
    },
    
})

class PageContent extends React.Component {
  static contextType = ThemeContext
  render() {
    const {isDarkMode} = this.context
    const {classes} = this.props

    return (
      <div className={isDarkMode ? classes.dark : classes.light}> 
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(PageContent) 