

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import chroma from 'chroma-js'

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    height: "600px",
    width: "400px",
    border: "1px solid black",
    backgroundColor: props => props.color.background,
    color: props =>  props.color.mainColor,
    // color: props => props.color.background ? chroma(props.color.background).luminance() >= 0.7 ? "black": "white" : "black",
    overflow: "hidden",
    position: "relative",
    
  }, 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1, 
  },
  navbar: {
    backgroundColor: props => props.color.navbar,
    color: props => props.color.navbar ? chroma(props.color.navbar).luminance() >= 0.7 ? "black": "white" : "black",
  },
  fabButton: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    backgroundColor: props => props.color.element,
    color: props => props.color.element ? chroma(props.color.element).luminance() >= 0.7 ? "black": "white" : "black",
  },
  samplePageContainer: {

  } 
}));


const SamplePage = (props) => {
  const classes = useStyles(props);
  // console.log(props.color.navbar)
  console.log(props.color)
  // console.log(chroma(props.color.button).luminance())
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.samplePageContainer}>
        <Box my={2}>
          {[...new Array(6)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            ).join('\n')}
        </Box>
        <Fab className={classes.fabButton}>
          <AddIcon />
        </Fab>
      </Container>
    </div>
  )
}

export default SamplePage



