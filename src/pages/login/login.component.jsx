import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { auth } from '../../firebase/firebase'
import { useStyles } from './login.styles'



const Login = () => {
  const [values, setValues] = React.useState({email: '', password: ''})

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    //   console.log(values)
      const {email, password} = values
    auth.signInWithEmailAndPassword(email, password)
    .then(user => console.log(user))
  }

//   React.useEffect(() => {
//     console.log(values)
//   }, [values])

  const classes = useStyles()

  return (
    <div className={classes.login}>
        <ValidatorForm /*ref="form"*/ className={classes.form} onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <h1 className={classes.title}>Login</h1>
            <TextValidator  fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator margin="normal" fullWidth label="Password" onChange={handleChange} name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <Button className={classes.button} variant="contained" color="primary"  fullWidth type="submit">Submit</Button>
            <Button className={classes.button} color="primary" variant="outlined" fullWidth>Google</Button>
        </ValidatorForm>
    </div>
  );
};

export default Login;
