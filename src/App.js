import React from "react";
import { Switch, Route } from 'react-router-dom'

import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content.component'
import Navbar from './components/navbar/navbar.component'
import ThemePage from './pages/theme/theme.component'
import Login from './pages/login/login.component'
import Register from './pages/register/register.component'
import WithSpinner from './components/with-spinner/with-spinner.component'

import { AuthContext } from './contexts/auth.context'


// import './App.css'

const PageContentWithSpinner = WithSpinner(PageContent)

const App = () => {
  const {loading} = React.useContext(AuthContext)
  // console.log(loading)
  return (
    <PageContentWithSpinner loading={loading}>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/todo" component={TodoApp}/>
          <Route exact path="/settings/theme" component={ThemePage}/>
        </Switch>
    </PageContentWithSpinner>
  )
}

export default App;
