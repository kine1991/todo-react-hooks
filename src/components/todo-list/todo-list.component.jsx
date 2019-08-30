import React from "react";
import Todo from "../todo/todo.component";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from '../../contexts/todos.context.jsx'

const TodoList = () => {
  const {todos} = React.useContext(TodosContext)
  if(todos.length)
  return (
    <Paper style={{backgroundColor: "white" }}>
      <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo key={todo.id} {...todo}/>
              {i < todos.length -1 && <Divider/>}
            </React.Fragment>
          ))}
      </List>
    </Paper>
  )
  return null
}

export default TodoList;