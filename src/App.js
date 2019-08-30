import React from "react";
import { Switch, Route } from 'react-router-dom'
import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content'
import Navbar from './components/navbar/navbar.component'
import ThemePage from './pages/theme/theme.component'
import { ThemeProvider } from './contexts/theme.context.jsx'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route exact path="/todo" component={TodoApp}/>
            <Route exact path="/settings/theme" component={ThemePage}/>
            {/* <TodoApp /> */}
          </Switch>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
