import React from 'react'

import { ThemeContext } from '../../contexts/theme.context'
import { useStyles } from './page-content.styles'


// import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const PageContent = ({children}) => {
  const {isDarkMode, currentPalette} = React.useContext(ThemeContext)
  const classes = useStyles({isDarkMode, currentPalette})

  return (
    

// <div>
//   <ValidatorForm>
//     <Button color="primary">Primary</Button>
//     <Button color="primary" variant="contained" fullWidth>Submit</Button>
//     <TextValidator variant="outlined" color="secondary" fullWidth label="Email" />
//   </ValidatorForm>
// </div>
      <div className={classes.pageContent}> 
        {children}
      </div>
  )
}


export default PageContent











// import React from 'react'

// import { ThemeContext } from '../../contexts/theme.context'
// import { useStyles } from './page-content.styles'

// // 
// import purple from '@material-ui/core/colors/purple';
// import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';

// const theme = createMuiTheme({
//   palette: {
//     // primary: purple,
//     primary: {
//       main: '#336699',
//     },
//     secondary: {
//       main: '#fff111',
//     },
//   },
// });
// // 


// const PageContent = ({children}) => {
//   const {isDarkMode, currentPalette} = React.useContext(ThemeContext)
//   const classes = useStyles({isDarkMode, currentPalette})

//   return (
//     <ThemeProvider theme={theme}>
//       <div className={classes.pageContent}> 
//         {children}
//       </div>

//     </ThemeProvider>
//   )
// }


// export default PageContent

