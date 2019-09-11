import React from 'react'
import ThemeContainer from '../../components/theme-container/theme-container.component'
import { useStyles } from './theme.styles'
import { ThemeContext } from '../../contexts/theme.context'
import WithSpinner from '../../components/with-spinner/with-spinner.component'


  
const ThemeContainerWithSpinner = WithSpinner(ThemeContainer)

const ThemePage = (props) => {
    const {mode} = React.useContext(ThemeContext)
    const [loading, setLoading] = React.useState(true)
    const classes = useStyles()

    React.useEffect(() => {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      p.then(() => setLoading(false))
      return () => console.log('I am unmounting');
    }, [])


    

    

    return ( 
      <div className={classes.root}>
        <h1 className={classes.title}>{mode}</h1>
        <ThemeContainerWithSpinner loading={loading} {...props} /> 
        {/* <ThemeContainer/> */}
      </div>
    );
}


export default ThemePage
