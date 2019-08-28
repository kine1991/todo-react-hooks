import React from 'react'
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: "grey",
        height: "100vh",
        width: "100vw",
    }
})

class PageContent extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root}> 
        {this.props.children}
      </Paper>
    )
  }
}

export default withStyles(styles)(PageContent) 