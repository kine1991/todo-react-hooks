import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  if(todos.length)
  return (
    <Paper style={{backgroundColor: "white" }}>
      <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo editTodo={editTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} {...todo}/>
              {i < todos.length -1 && <Divider/>}
            </React.Fragment>
          ))}
      </List>
    </Paper>
  )
  return null
}

export default TodoList;

