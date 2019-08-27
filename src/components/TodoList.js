import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = ({todos}) => {
  return (
    <Paper style={{backgroundColor: "white" }}>
      <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <li>{todo.task}</li>
            </React.Fragment> 
          ))}
      </List>
      TodoList
    </Paper>
  )
}

export default TodoList;

