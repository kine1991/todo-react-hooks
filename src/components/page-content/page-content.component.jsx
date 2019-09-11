import React from 'react'

import { ThemeContext } from '../../contexts/theme.context'
import { useStyles } from './page-content.styles'

const PageContent = ({children}) => {
  const {isDarkMode, currentPalette} = React.useContext(ThemeContext)

  const classes = useStyles({isDarkMode, currentPalette})

  return (
    <div className={classes.pageContent}> 
      {children}
    </div>
  )
}


export default PageContent



// import React from 'react'

// import WithSpinner from '../with-spinner/with-spinner.component'
// import { ThemeContext } from '../../contexts/theme.context'
// import { AuthContext } from '../../contexts/auth.context'
// import { useStyles } from './page-content.styles'

// const PageContent = ({children}) => {
//   const {isDarkMode, currentPalette} = React.useContext(ThemeContext)
//   const {isAuth} = React.useContext(AuthContext)

//   const classes = useStyles({isDarkMode, currentPalette})

//   return (
//     <div className={classes.pageContent}> 
//       {children}
//     </div>
//   )
// }


// export default PageContent
