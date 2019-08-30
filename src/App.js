import React from "react";
import TodoApp from "./pages/todo-app/todo-app.component";
import PageContent from './components/page-content/page-content'
import { ThemeProvider } from './contexts/theme.context.jsx'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <TodoApp />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
