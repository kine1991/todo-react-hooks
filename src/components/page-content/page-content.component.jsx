import React from 'react'
import { ThemeContext } from '../../contexts/theme.context.jsx'
import { useStyles } from './page-content.styles'

const PageContent = ({children}) => {
  const {isDarkMode, currentPalette} = React.useContext(ThemeContext)

  const classes = useStyles({isDarkMode, currentPalette})

  return (
    <div className={classes.pageContent} /*style={{backgroundColor: currentPalette.background}}*/> 
      {children}
    </div>
  )
}


export default PageContent


// box-sizing: border-box;  /*| padding-box | inherit content-box | */