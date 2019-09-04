import React from 'react'
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from '../../contexts/theme.context'


const Navbar = () => {
    const {isDarkMode, toggleTheme} = React.useContext(ThemeContext)
    return (
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
            <Toolbar> 
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                <Switch  checked={isDarkMode} onChange={toggleTheme}/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar




// import React from 'react'
// import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Switch from "@material-ui/core/Switch";
// import { ThemeContext } from '../../contexts/theme.context'

// class Navbar extends React.Component {
//     static contextType = ThemeContext
//     render() {
//         const {isDarkMode, toggleTheme} = this.context
//         return (
//             <AppBar color='primary' position='static' style={{ height: "64px" }}>
//                 <Toolbar> 
//                     <Typography color='inherit'>TODOS WITH HOOKS</Typography>
//                     <Switch  checked={isDarkMode} onChange={toggleTheme}/>
//                 </Toolbar>
//             </AppBar>
//         )
//     }
// }


// export default  Navbar
