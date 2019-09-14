import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, /*TextValidator*/} from 'react-material-ui-form-validator';
import { auth } from '../../firebase/firebase'
import { useStyles } from './login.styles'
import CustomTextField from '../../components/custom-textfield/custom-textfield.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {TextValidator} from 'react-material-ui-form-validator';

const Login = () => {
  const [values, setValues] = React.useState({email: '', password: ''})

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
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
            <TextValidator variant="outlined" color="secondary" fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            {/* <TextValidator margin="normal" fullWidth label="Password" onChange={handleChange} name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/> */}

            <CustomTextField variant="outlined" margin="dense" fullWidth label="Email" onChange={handleChange} type="email" name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <CustomTextField variant="outlined" margin="dense" fullWidth label="Password" onChange={handleChange} type="password" name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>

            <Button color="primary" className={`${classes.button} custom-button`} variant="contained"   fullWidth type="submit">Submit</Button>
            <Button color="primary" className={`${classes.button} custom-button`}  variant="outlined" fullWidth>Google</Button>
            {/* <CustomButton className={classes.xxx}>Custom Button</CustomButton> */}

            {/* <Button className={`${classes.button} custom-button`}>Button</Button> */}
            <Button color="primary">Primary</Button>
            <Button color="primary" variant="contained" fullWidth>Submit</Button>
            <TextValidator variant="outlined" color="secondary" fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
        </ValidatorForm>
    </div>
  );
};

export default Login;
