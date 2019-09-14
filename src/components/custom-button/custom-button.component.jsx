
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {
    // background: "red"
  },
}));

function CustomCheckbox() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },

});

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </ThemeProvider>
  );
}


// import React from 'react';
// import chroma from 'chroma-js'
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// import { ThemeContext } from '../../contexts/theme.context'

// const StyledButton = withStyles({
// root: {
//   background: props => props.color,
//   '&:hover': {
//     background: props => chroma(props.color).darken(0.3).hex(),
//   },
//   color: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
//   },
// })(({ classes, color, ...props }) => {
//     console.log(props)
//     return (
//         <Button className={classes.root} {...props} />
//     )
// });


// const CustomButton = ({children, ...props}) => {
//   const {currentPalette} = React.useContext(ThemeContext)
//   console.log(props)
//   return (
//     <StyledButton color={currentPalette.element} /*className={className}*/ {...props}>{children}</StyledButton>
//   )
// }

// export default CustomButton





