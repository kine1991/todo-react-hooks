import React from 'react'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { firestore } from '../../firebase/firebase'
import { useStyles } from './form-article.styles'
import { AuthContext } from '../../contexts/auth.context'


import slugify from 'slugify'
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';


const FormArticle = () => {
    const classes = useStyles()
    const [values, setValues] = React.useState({caption: '', captionSlugify: '', briefBody: '', body: '', author: ''})
    const {userData} = React.useContext(AuthContext);
    // const [autor, setAutor] = React.useState({})
    // const [errorText, setErrorText] = React.useState('error!')

    // React.useEffect(() => {
    //     ValidatorForm.addValidationRule('isSlugifyExists', (value) => {
    //         if (value !== values.password) {
    //             return false;
    //         }
    //         return true;
    //     });
    //   }, [values.password, values.confirmPassword])

    React.useEffect(() => {
        setValues({...values, 'captionSlugify': slugify(values.caption) })
    }, [values.caption])

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const createdAt = new Date();
        const { caption, captionSlugify, briefBody, body, author } = values;

        const data = {
            caption,
            captionSlugify,
            briefBody,
            body,
            author,
            uid: userData.uid,
            createdAt
        }

        const articleRef = firestore.collection("test").doc(captionSlugify);
        const snapShot = await articleRef.get();
        // console.log(snapShot);
        if (snapShot.exists) {
            // await articleRef.set(data,{ merge: false });
            console.log('exists')
            alert('Slugify already exists')
        } else {
            await articleRef.set(data, { merge: false });
        }
      } catch (err) {
        //   console.error("Error writing document: ", err);
      }
    };

    return (
        <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator name="caption" placeholder="Caption" variant="outlined" margin="dense" fullWidth value={values.caption} onChange={handleChange}/>
            <TextValidator name="captionSlugify" placeholder="Caption Slugify" variant="outlined" margin="dense" fullWidth value={values.captionSlugify} onChange={handleChange} />
            <TextValidator name="briefBody" placeholder="Brief Body" variant="outlined" margin="dense" fullWidth  value={values.briefBody} onChange={handleChange}   multiline={true} rows={3} rowsMax={5}/>
            <TextValidator name="body" placeholder="Body" variant="outlined" margin="dense" fullWidth  value={values.body} onChange={handleChange}   multiline={true} rows={5} rowsMax={6}/>
            <TextValidator name="author" placeholder="Autor" variant="outlined" margin="dense" fullWidth  value={values.author} onChange={handleChange}/>
            {/* <Select value={values.age} onChange={handleChange} fullWidth placeholder="select autor">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
            <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
        </ValidatorForm>
    )
}

export default FormArticle