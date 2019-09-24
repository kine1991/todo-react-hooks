import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles(theme => ({
    paper: {
      margin: theme.spacing(3),
      backgroundColor: theme.backgroundBrighten,
      color: theme.color,
      minHeight: "300px",
    },
    title: {
      textAlign: "center",
      paddingTop: "1rem"
    },
    form: {
      width: "600px",
      
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }));

const Text = () => {
    const [values, setValues] = React.useState({displayName: '', photoURL: ''});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({...values, [name]: value })
    }

    const handleSubmitUpdatePrifile = (e) => {
      e.preventDefault()
      console.log(values.displayName, values.photoURL)
    }

    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <h1 className={classes.title}>BasicsPage</h1>
            <div className={classes.flex}>
              <ValidatorForm className={classes.form} onSubmit={handleSubmitUpdatePrifile}>
                  <TextValidator name="displayName" placeholder="Display Name" variant="outlined" margin="dense" fullWidth value={values.displayName} onChange={handleChange} />
                  <TextValidator name="photoURL" placeholder="Photo URL" variant="outlined" margin="dense" fullWidth value={values.photoURL} onChange={handleChange} />
                  <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
              </ValidatorForm>
            </div>
        </Paper>
    )
}

export default Text
