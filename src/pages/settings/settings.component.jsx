import React from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { /*Redirect,*/ Switch, Route, Link } from 'react-router-dom'
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
// import  { auth } from '../../firebase/firebase'

import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { AuthContext } from '../../contexts/auth.context'
import ThemePage from '../theme/theme.component'

import AccountPage from '../settings/account/account.component'
// import BasicsPage from '../settings/basics/basics.component'
import PhotosPage from '../settings/photos/photos.component'
import BasicsPage from './basics/basics.component'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3),
        backgroundColor: theme.backgroundBrighten,
        color: theme.color,
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
            {/* <Redirect exact from="/settings" to="/settings/basics" /> */}
            <Switch>
                {/* <Route exact path="/settings/account" render={AccountPage}/> */}
                {/* <Route exact path="/settings/basics" render={BasicsPage}/> */}
                <Route exact path="/settings/theme" component={ThemePage}/>
                <Route exact path="/settings/photos" component={PhotosPage}/>
                <Route exact path="/settings/basics" component={BasicsPage}/>
            </Switch>
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
                    <ListItem button to='/settings/photos' component={Link}>
                        <ListItemIcon>
                            <DraftsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="My Photos" />
                    </ListItem>
                    <ListItem button to='/settings/theme' component={Link}>
                        <ListItemIcon>
                            <DraftsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Theme" />
                    </ListItem>
                </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

export default Settings