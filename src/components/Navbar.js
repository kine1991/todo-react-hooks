import React from 'react'
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Navbar extends React.Component {
    render() {
        return (
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar> 
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}


export default  Navbar