import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return (
    <Paper style={{backgroundColor: "white" }}>
      <List>
          {todos.map((todo, i) => (
            <>
              <Todo editTodo={editTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} id={todo.id} key={todo.id} task={todo.task} completed={todo.completed}/>
              {i < todos.length -1 && <Divider/>}
            </>
          ))}
      </List>
    </Paper>
  )
}

export default TodoList;

