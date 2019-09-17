import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content.component'
import Navbar from './components/navbar/navbar.component'
import ThemePage from './pages/theme/theme.component'
import Login from './pages/login/login.component'
import Register from './pages/register/register.component'
import ArticleAdmin from './pages/admin/article/article.admin.component'

import WithSpinner from './components/with-spinner/with-spinner.component'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme /*, makeStyles */} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import chroma from 'chroma-js'
import { AuthContext } from './contexts/auth.context'
import { ThemeContext } from './contexts/theme.context'

const PageContentWithSpinner = WithSpinner(PageContent)


const App = () => {
  const {loading, isAuth} = React.useContext(AuthContext);
  const {currentPalette} = React.useContext(ThemeContext);
  const {background, navbar, mainColor, element} = currentPalette;
  // const theme = createMuiTheme({background, navbar, mainColor, element});
  const theme = createMuiTheme({
    overrides: {
      // MuiInput: {
      //   root: {
      //     "&:hover": {
      //       borderColor: "red"
      //     }
      //   },
      // },
      MuiInputBase: {
        root: {
          color: props =>  chroma(theme.navbar).luminance() >= 0.7 ? grey[900]: grey[100], // цвет текста ввода
        }
      },

    },

    palette: {
      // primary: purple,
      primary: {
        main: "#3fff99"
      },
      secondary: {
        main: "#fff111"
      }
    },
    background,
    navbar,
    mainColor,
    element
  });

  return (
    <ThemeProvider theme={theme}>
      <PageContentWithSpinner loading={loading}>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route exact path="/login" render={() => isAuth ? <Redirect to="/"/> : <Login/>}/>
            <Route exact path="/register" render={() => isAuth ? <Redirect to="/"/> : <Register/>}/>
            <Route exact path="/todo" component={TodoApp}/>
            <Route exact path="/settings/theme" component={ThemePage}/>
            <Route exact path="/settings/theme" component={ThemePage}/>
            
            <Route exact path="/admin/article" component={ArticleAdmin}/>
          </Switch>
      </PageContentWithSpinner>
    </ThemeProvider>
  )
}

export default App;
