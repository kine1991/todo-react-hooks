import React from 'react'

import { ThemeContext } from '../../contexts/theme.context'
import { useStyles } from './page-content.styles'

// 
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import Button from '@material-ui/core/Button';
import CustomButton from '../custom-button/custom-button.component'
import {TextValidator} from 'react-material-ui-form-validator';

const theme = createMuiTheme({
  palette: {
    // primary: purple,
    primary: {
      main: '#336699',
    },
    secondary: {
      main: '#fff111',
    },
  },
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});
// 


const PageContent = ({children}) => {
  const {isDarkMode, currentPalette} = React.useContext(ThemeContext)
  const classes = useStyles({isDarkMode, currentPalette})

  return (
    <ThemeProvider theme={theme}> 
      <div className={classes.pageContent}> 
        {children}
      </div>

    </ThemeProvider>
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

