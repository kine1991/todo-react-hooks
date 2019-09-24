import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing(2),
    },
    iconHover: {
      margin: theme.spacing(2),
      '&:hover': {
      },
    },
}));

const PhotosPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            PhotosPage
        </div>
    )
}

export default PhotosPage;
