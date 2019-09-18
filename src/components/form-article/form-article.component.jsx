import React from 'react'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import /*firebase,*/ { firestore } from '../../firebase/firebase'
import { useStyles } from './form-article.styles'
import { AuthContext } from '../../contexts/auth.context'
import slugify from 'slugify'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const FormArticle = () => {
    const classes = useStyles()
    const [values, setValues] = React.useState({caption: '', captionSlugify: '', briefBody: '', body: '', author: ''})
    const [authorArray, setAuthorArray] = React.useState([])
    const {userData} = React.useContext(AuthContext);
// console.log(authorArray)
    React.useEffect(() => {
        setValues({...values, 'captionSlugify': slugify(values.caption, {lower: true, replacement: '-' ,remove: /[*+~.()'"!:@]/g}) })
    }, [values.caption])

    React.useEffect(() => {
        (async function() {
            try {
                const articleRef = firestore.collection("test") //.where("capital", "==", true)
                const snapShot = await articleRef.get();
                const itemsArray = new Set();
                snapShot.forEach(doc => {
                    itemsArray.add(doc.data().author)
                })
                setAuthorArray([...itemsArray])

                // console.log(snapShot)
                if(snapShot.exists){
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])

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
            createdAt,
            tags: ['tag5', 'tag6'],
        }

        const articleRef = firestore.collection("test").doc(captionSlugify);
        const snapShot = await articleRef.get();
        if (snapShot.exists) {
            alert('Slugify already exists')
        } else {
            await articleRef.set(data, { merge: false });
        }
      } catch (err) {
          console.error("Error writing document: ", err);
      }
    };

    const handleClick2 = async () => {
        // const articleRef = firestore.collection("test").doc(values.captionSlugify);
        // const snapShot = await articleRef.get();
        const articleRef = firestore.collection("test").doc("frank")
        articleRef.update({
            // regions: firebase.firestore.FieldValue.arrayUnion("rrrr3") // добавляет уникальный id
            // regions: firebase.firestore.FieldValue.arrayRemove("rrrr2") // delete
            // regionsIncrement: firebase.firestore.FieldValue.increment(50) // delete
        });
    }

    return (
        <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator name="caption" placeholder="Caption" variant="outlined" margin="dense" fullWidth value={values.caption} onChange={handleChange}/>
            <TextValidator name="captionSlugify" placeholder="Caption Slugify" variant="outlined" margin="dense" fullWidth value={values.captionSlugify} onChange={handleChange} />
            <TextValidator name="briefBody" placeholder="Brief Body" variant="outlined" margin="dense" fullWidth  value={values.briefBody} onChange={handleChange}   multiline={true} rows={3} rowsMax={5}/>
            <TextValidator name="body" placeholder="Body" variant="outlined" margin="dense" fullWidth  value={values.body} onChange={handleChange}   multiline={true} rows={5} rowsMax={6}/>

            <div className={classes.author} /*variant="outlined"*/>
                <TextValidator name="author" placeholder="Autor" variant="outlined" margin="dense" /*fullWidth */ value={values.author} onChange={handleChange}/>
                <FormControl>
                    <InputLabel  htmlFor="outlined-age-native-simple2">Select Author</InputLabel>
                    <Select variant="outlined" value={values.author} onChange={handleChange} name="author" /*fullWidth */ placeholder="select autor" inputProps={{name: 'author', id: 'outlined-age-native-simple2'}}  >
                        {authorArray.map(author => (
                            <MenuItem key={author} value={author} >{author}</MenuItem>
                            ))}
                    </Select>
                </FormControl>

            </div>


            <Button className={classes.button} fullWidth color="primary" variant="contained"  type="submit">Submit</Button>
            <Button className={classes.button} fullWidth color="primary" variant="outlined"  onClick={handleClick2}>Test</Button>
        </ValidatorForm>
    )
}

export default FormArticle



    // React.useEffect(() => {
    //     ValidatorForm.addValidationRule('isSlugifyExists', (value) => {
    //         if (value !== values.password) {
    //             return false;
    //         }
    //         return true;
    //     });
    //   }, [values.password, values.confirmPassword])



