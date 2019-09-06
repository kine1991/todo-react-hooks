import React from 'react'
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { ThemeContext } from '../../contexts/theme.context'
import { useStyles } from './navbar.styles'



const Navbar = () => {
    const {isDarkMode, toggleTheme, currentPalette} = React.useContext(ThemeContext)
    const classes = useStyles({currentPalette})

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    console.log(anchorEl)
    function handleMenu(e) {
        setAnchorEl(e.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
    return (
        <AppBar className={classes.navbar}  /*color='primary'*/ position='static' style={{ height: "64px" }}>
            <Toolbar> 
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                <Switch  checked={isDarkMode} onChange={toggleTheme}/>
                <Typography variant="h6" className={classes.title}>Photos</Typography>
                {auth && (
                    <div>
                    <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                    </div>
                )}
                <Switch checked={auth} onChange={(e) => setAuth(e.target.checked)} aria-label="login switch" />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar




// ********************
// ********************
// ********************
// ********************

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function SwipeableTemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
//       <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
//       <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
//       <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
//       <SwipeableDrawer
//         open={state.left}
//         onClose={toggleDrawer('left', false)}
//         onOpen={toggleDrawer('left', true)}
//       >
//         {sideList('left')}
//       </SwipeableDrawer>
//       <SwipeableDrawer
//         anchor="top"
//         open={state.top}
//         onClose={toggleDrawer('top', false)}
//         onOpen={toggleDrawer('top', true)}
//       >
//         {fullList('top')}
//       </SwipeableDrawer>
//       <SwipeableDrawer
//         anchor="bottom"
//         open={state.bottom}
//         onClose={toggleDrawer('bottom', false)}
//         onOpen={toggleDrawer('bottom', true)}
//       >
//         {fullList('bottom')}
//       </SwipeableDrawer>
//       <SwipeableDrawer
//         anchor="right"
//         open={state.right}
//         onClose={toggleDrawer('right', false)}
//         onOpen={toggleDrawer('right', true)}
//       >
//         {sideList('right')}
//       </SwipeableDrawer>
//     </div>
//   );
// }






