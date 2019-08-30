import React from "react";
import TodoList from "./todo-list/todo-list.component";
import TodoForm from "./todo-form/todo-form.component";
import Grid from "@material-ui/core/Grid";
import Navbar from './navbar/navbar.component.jsx'
import { TodosProvider } from '../contexts/todos.context.jsx'

function TodoApp() {
  return (
    <>
      <Navbar/>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm/>
            <TodoList/>
          </TodosProvider>
        </Grid>
      </Grid>
    </>
  );
}
export default TodoApp;

