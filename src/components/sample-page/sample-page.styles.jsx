import { makeStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js'

export const useStyles = makeStyles(theme => ({
  root: {
    height: "800px",
    maxWidth: "500px",
    border: "1px solid black",
    backgroundColor: props => props.color.background,
    color: props =>  props.color.mainColor,
    // color: props => props.color.background ? chroma(props.color.background).luminance() >= 0.7 ? "black": "white" : "black",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      height: "1600px",
    },
    [theme.breakpoints.down('xs')]: {
      height: "460px",
    },
  }, 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1, 
  },
  navbar: {
    backgroundColor: props => props.color.navbar,
    color: props => props.color.navbar ? chroma(props.color.navbar).luminance() >= 0.7 ? "black": "white" : "black",
  },
  fabButton: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    backgroundColor: props => props.color.element,
    color: props => props.color.element ? chroma(props.color.element).luminance() >= 0.7 ? "black": "white" : "black",
  },
  samplePageContainer: {

  } 
}));