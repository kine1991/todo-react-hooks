import React from "react";
import TodoApp from "./components/TodoApp";
import PageContent from './components/PageContent'
import { ThemeProvider } from './contexts/ThemeContext'

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
