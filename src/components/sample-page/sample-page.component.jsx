import React from 'react';
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
import { useStyles } from './sample-page.styles'



const SamplePage = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.samplePageContainer}>
        <Box my={2}>{[...new Array(14)].map(() => `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,).join('\n')}</Box>
        <Fab className={classes.fabButton}>
          <AddIcon />
        </Fab>
      </Container>
    </div>
  )
}

export default SamplePage



