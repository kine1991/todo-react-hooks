import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../../firebase/firebase'


export const useStyles = makeStyles(theme => ({
    login: {
        width: "500px",
        height: "400px",
        margin : '3rem auto',
        boxShadow: "1px 1px 3px rgba(0,0,0, 0.3)",
    },
    form: {
        padding: "3rem",
    }
})) 

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
            <TextValidator margin="normal" fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator margin="normal" fullWidth label="Password" onChange={handleChange} name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <Button variant="contained" color="primary"  fullWidth type="submit">Submit</Button>
        </ValidatorForm>
    </div>
  );
};

export default Login;
