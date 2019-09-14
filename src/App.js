import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content.component'
import Navbar from './components/navbar/navbar.component'
import ThemePage from './pages/theme/theme.component'
import Login from './pages/login/login.component'
import Register from './pages/register/register.component'
import WithSpinner from './components/with-spinner/with-spinner.component'
import { ThemeProvider } from '@material-ui/styles';

import { AuthContext } from './contexts/auth.context'
import { ThemeContext } from './contexts/theme.context'

// const PageContentWithSpinner = WithSpinner(PageContent)


const App = () => {
  const {loading, isAuth} = React.useContext(AuthContext);
  const {currentPalette} = React.useContext(ThemeContext);

  const {background, navbar, mainColor, element} = currentPalette;
  const theme = {background, navbar, mainColor, element};

  return (
    <ThemeProvider theme={theme}>
      {/* <PageContentWithSpinner loading={loading}> */}
      <PageContent>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route exact path="/login" render={() => isAuth ? <Redirect to="/"/> : <Login/>}/>
            <Route exact path="/register" render={() => isAuth ? <Redirect to="/"/> : <Register/>}/>
            <Route exact path="/todo" component={TodoApp}/>
            <Route exact path="/settings/theme" component={ThemePage}/>
          </Switch>

      </PageContent>
      {/* </PageContentWithSpinner> */}
    </ThemeProvider>
  )
}

export default App;
