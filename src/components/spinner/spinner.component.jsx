import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  spinner: {
    width: "100wh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // transform: "translateX(50%)",
  },
  progress: {
    // margin: theme.spacing(2),
  }
}));
 

const Spinner = () => {
    const classes = useStyles();

    return (
      <div className={classes.spinner}>
        <CircularProgress className={classes.progress} />
      </div>
    );
}

export default Spinner
