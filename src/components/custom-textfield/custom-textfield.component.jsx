
import React from 'react'
import {TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/theme.context'
import chroma from 'chroma-js'


const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
    },
    '& label': {
      color: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
      },
      '&:hover fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
      },
      '&.Mui-focused fieldset': {
        borderColor: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
      },
    },
  },
  input: {
    color: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
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
