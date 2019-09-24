import React from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Readirect, Switch, Route, Link } from 'react-router-dom'
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
import  { auth } from '../../firebase/firebase'

import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { AuthContext } from '../../contexts/auth.context'

import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3),
        backgroundColor: theme.backgroundBrighten,
        color: theme.color,
        fill: theme.color,
    }
}));

const Settings = () => {
    const {isAuth, userData} = React.useContext(AuthContext);

    React.useEffect(() => {
      console.log(userData)
      // console.log('isAuth')
    }, [isAuth])

    const classes = useStyles();
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Switch>
                <Route path="/settings/basics" render={() => <h1>Basics</h1>}/>
                <Route path="/settings/account" render={() => <h1>Account</h1>}/>
            </Switch>
            {/* <Paper className={classes.paper}>xs=12</Paper>
              qqq */}
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
                {
                    userData.email ? 
                    (<List>
                        <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={userData.photoURL} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={userData.displayName}
                            secondary={<React.Fragment><Typography component="span" variant="body2" className={classes.inline} color="textPrimary">{userData.email}</Typography>Test2</React.Fragment>}/>
                        </ListItem>
                    </List>)
                    : (<h1>No Data</h1>)
                }
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button to='/settings/basics' component={Link}>
                    <ListItemIcon>
                        <InboxIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Basics" />
                    </ListItem>
                    <ListItem button to='/settings/account' component={Link}>
                    <ListItemIcon>
                        <DraftsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                    </ListItem>
                </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

export default Settings