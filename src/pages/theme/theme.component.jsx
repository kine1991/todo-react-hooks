import React from 'react'
import ThemeContainer from '../../components/theme-container/theme-container.component'
import { useStyles } from './theme.styles'
import { ThemeContext } from '../../contexts/theme.context'
import Spinner from '../../components/spinner/spinner.component'


  


const ThemePage = () => {
    const {mode} = React.useContext(ThemeContext)
    const classes = useStyles()

    const [loading, setLoading] = React.useState(false)



    React.useEffect(() => {
        // setTimeout(() => {
        //     setLoading(false)
        //     console.log()
        // }, 3000)
    }, [loading])
    
    return ( 
      <div className={classes.root}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className={classes.title}>{mode}</h1>
            <ThemeContainer />
          </>
        )}
      </div>
    );
}

export default ThemePage
