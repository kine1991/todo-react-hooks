import React from "react";
import Grid from "@material-ui/core/Grid";
import TodoList from "../../components/todo-list/todo-list.component";
import TodoForm from "../../components/todo-form/todo-form.component";
import { TodosProvider } from '../../contexts/todos.context'


function TodoApp() {
  return (
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm/>
            <TodoList/>
          </TodosProvider>
        </Grid>
      </Grid>
  );
}
export default TodoApp;

