import React from 'react'
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
    button: {
        margin: "1rem 0"
    }
  }));

const Account = () => {
    const [values, setValues] = React.useState({password: '', newPassword: ''})
    const [validate, setValidate] = React.useState({passwordValidate: {message: '', valid: true}, newPasswordValidate: {message: '', valid: true}})
    // const [values, setValues] = React.useState({password: '', newPassword: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value })

        console.log(validate)

        if(name){
            switch(name){
                case 'password':
                    value.length >= 6 ? setValidate({...validate, passwordValidate: {message: '', valid: true}}) : setValidate({...validate, passwordValidate: {message: 'password must be minimum 6', valid: false}})
                    break;
                case 'newPassword':
                    value.length >= 6 ? setValidate({...validate, newPasswordValidate: {message: '', valid: true}}) : setValidate({...validate, newPasswordValidate: {message: 'password must be minimum 6', valid: false}})
                    break;
                default:
                    break;
            }
        }
    }

    React.useEffect(() => {
    //     // const { name, value } = e.target;

    //     // console.log(Object.keys(values))
    //     // setValues({...values, [name]: value })

    //     // console.log(validate)
        

    //     // if(name){
    //     //     switch(name){
    //     //         case 'password':
    //     //             value.length >= 6 ? setValidate({message: '', valid: true}) : setValidate({message: 'password must be minimum 6', valid: false})
    //     //             break;
    //     //         case 'newPassword':
    //     //             value.length >= 6 ? setValidate({message: '', valid: true}) : setValidate({message: 'password must be minimum 6', valid: false})
    //     //             break;
    //     //         default:
    //     //             break;
    //     //     }
    //     // }
    // console.log(validate.passwordValidate.message)
    })

    const classes = useStyles();
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <form onSubmit={handleSubmit}>
                <TextField name="password"  variant="outlined" margin="dense" fullWidth value={values.password} onChange={handleChange} error={!validate.passwordValidate.valid} label={validate.passwordValidate.message}/>
                <TextField name="newPassword" placeholder="New Password" variant="outlined" margin="dense" fullWidth value={values.newPassword} onChange={handleChange} error={!validate.passwordValidate.valid} label={validate.passwordValidate.message}/>
                <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
            </form>
            {/* <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator name="password" placeholder="Password" variant="outlined" margin="dense" fullWidth value={values.password} onChange={handleChange}/>
                <TextValidator name="newPassword" placeholder="New Password" variant="outlined" margin="dense" fullWidth value={values.newPassword} onChange={handleChange} />
                <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
            </ValidatorForm> */}
          </Grid>
          <Grid item xs={4}>
            <List>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://lh5.googleusercontent.com/-aqNSaRVP6Vw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfgFKWRnsi1PXWblZdiq8-Lm32nUw/photo.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={<React.Fragment><Typography component="span" variant="body2" className={classes.inline} color="textPrimary">Ali Connors</Typography>{" — I'll be in your neighborhood doing errands this…"}</React.Fragment>}/>
            </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
}

export default Account
// "@material-ui/core": "^4.3.3",