import React from 'react'
import { ThemeContext } from '../../contexts/theme.context.jsx'
import { useStyles } from './page-content.styles'


const PageContent = ({children}) => {

  const classes = useStyles()
  const {isDarkMode} = React.useContext(ThemeContext)



  return (
    <div className={isDarkMode ? classes.dark : classes.light}> 
      {children}
    </div>
  )
}


export default PageContent


// import React from 'react'
// import { withStyles } from "@material-ui/core/styles";
// import { ThemeContext } from '../../contexts/theme.context.jsx'
// import { styles } from './page-content.styles'
// // import {amber ,blue ,blueGrey,brown ,common ,cyan ,deepOrange,deepPurple ,green ,grey,indigo,lightBlue,lightGreen ,lime,orange,pink,purple ,red ,teal,yellow } from '@material-ui/core/colors';




// class PageContent extends React.Component {
//   static contextType = ThemeContext
//   render() {
//     const {isDarkMode} = this.context
//     const {classes} = this.props

//     return (
//       <div className={isDarkMode ? classes.dark : classes.light}> 
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(PageContent) 