import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';

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
    const [values, setValues] = React.useState({displayName: '', photoURL: '', location: ''});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({...values, [name]: value })
    }

    const handleSubmitUpdatePrifile = (e) => {
      e.preventDefault()
      console.log(values.displayName, values.photoURL)
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <h1 className={classes.title}>BasicsPage</h1>
            <div className={classes.flex}>
              <ValidatorForm className={classes.form} onSubmit={handleSubmitUpdatePrifile}>
                  <TextValidator name="displayName" placeholder="Display Name" variant="outlined" margin="dense" fullWidth value={values.displayName} onChange={handleChange} />
                  <TextValidator name="photoURL" placeholder="Photo URL" variant="outlined" margin="dense" fullWidth value={values.photoURL} onChange={handleChange} />
                  <TextValidator name="loaction" placeholder="Loaction" variant="outlined" margin="dense" fullWidth value={values.loaction} onChange={handleChange} />


                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker disableToolbar variant="inline" format="MM/dd/yyyy" margin="normal" id="date-picker-inline" label="Date picker inline" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date',}}/>
                    {/* <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Date picker dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date',}}/> */}

                  </MuiPickersUtilsProvider>

                  <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
              </ValidatorForm>
            </div>
        </Paper>
    )
}

export default Text
