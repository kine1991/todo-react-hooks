
import React from 'react'
import {TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/theme.context'
import chroma from 'chroma-js'
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
    },
    '& label': {
      color: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
      },
      '&:hover fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
      },
      '&.Mui-focused fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? grey[900]: grey[100],
      },
    },
    
  },
  input: {
    color: props =>  chroma(props.color).luminance() >= 0.7 ? red[900]: red[100],
  }
})(({ classes, color, ...other }) => <TextValidator className={classes.root} InputProps={{className: classes.input}} {...other} />);



const CustomTextField = ({...props}) => {
  const {currentPalette} = React.useContext(ThemeContext)
  // console.log(props)
  return (
    <StyledTextField  {...props} color={currentPalette.background}/>
  )
}

export default CustomTextField
