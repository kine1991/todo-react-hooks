import React from "react";
import { Switch, Route } from 'react-router-dom'

import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content.component'
import Navbar from './components/navbar/navbar.component'
import ThemePage from './pages/theme/theme.component'
import Login from './pages/login/login.component'
import Register from './pages/register/register.component'
import { ThemeProvider } from './contexts/theme.context.jsx'
import './App.css'


const App = () => {
  return (
    <div className="xxx">
    <ThemeProvider>
      <PageContent>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/todo" component={TodoApp}/>
            <Route exact path="/settings/theme" component={ThemePage}/>
          </Switch>
      </PageContent>
    </ThemeProvider>

    </div>
  )
}

export default App;
