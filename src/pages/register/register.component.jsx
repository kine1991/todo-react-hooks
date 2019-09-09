import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { auth } from '../../firebase/firebase'
import { useStyles } from './register.styles'



const Register = () => {
  const [values, setValues] = React.useState({name: '', email: '', password: '', confirmPassword: ''})

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
      console.log(values)
      const {name, email, password, confirmPassword} = values
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => console.log(user))
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== values.password) {
            return false;
        }
        return true;
    });
    // console.log(values.password, values.confirmPassword)
  }, [values.password, values.confirmPassword])

  const classes = useStyles()

  return (
    <div className={classes.register}>
        <ValidatorForm /*ref="form"*/ className={classes.form} onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <h1 className={classes.title}>Register</h1>
            <TextValidator  fullWidth label="Name" onChange={handleChange} name="name" value={values.name} validators={['required']} errorMessages={['this field is required']}/>
            <TextValidator margin="normal" fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator margin="normal" fullWidth label="Password" onChange={handleChange} name="password" type="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <TextValidator margin="normal" fullWidth label="Confirm Password" onChange={handleChange} name="confirmPassword" type="password" value={values.confirmPassword} validators={['required', 'isPasswordMatch']} errorMessages={['this field is required', 'Password do not match']}/>
            <Button className={classes.button} variant="contained" color="primary"  fullWidth type="submit">Submit</Button>
            <Button className={classes.button} color="primary" variant="outlined" fullWidth>Google</Button>
        </ValidatorForm>
    </div>
  );
};

export default Register;