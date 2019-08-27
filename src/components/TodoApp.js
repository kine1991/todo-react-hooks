import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from '../hooks/useTodoState'

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
  // const initialTodos = [
  //   { id: 1, task: "Walk The Goldfish", completed: true },
  //   { id: 2, task: "Walk The Goldfish2", completed: false },
  // ];

  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)


  React.useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  

  return (
    <Paper style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa" }} elevation={0}>
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar> 
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;



// import React from "react";
// import TodoList from "./TodoList";
// import TodoForm from "./TodoForm";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Grid from "@material-ui/core/Grid";
// import uuid from 'uuid/v4'
// import useTodoState from '../hooks/useTodoState'

// function TodoApp() {
//   const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
//   // const initialTodos = [
//   //   { id: 1, task: "Walk The Goldfish", completed: true },
//   //   { id: 2, task: "Walk The Goldfish2", completed: false },
//   // ];

//   const [todos, setTodos] = React.useState(initialTodos)

//   React.useEffect(() => {
//     window.localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

  
//   const addTodo = newTodoText => {
//     setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
//   }

//   const removeTodo = todoId => {
//     const updatedTodos = todos.filter(todo => todo.id !== todoId)
//     setTodos(updatedTodos);
//   }

//   const toggleTodo = todoId => {
//     const updatedTodos = todos.map(todo => {
//       return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
//     })
//     setTodos(updatedTodos)
//   }

//   const editTodo = (todoId, newTask) => {
//     const updatedTodos = todos.map(todo => {
//       return todo.id === todoId ? {...todo, task: newTask} : todo
//     })
//     setTodos(updatedTodos)
//   }


//   return (
//     <Paper style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa" }} elevation={0}>
//       <AppBar color='primary' position='static' style={{ height: "64px" }}>
//         <Toolbar> 
//           <Typography color='inherit'>TODOS WITH HOOKS</Typography>
//         </Toolbar>
//       </AppBar>
//       <Grid container justify='center' style={{ marginTop: "1rem" }}>
//         <Grid item xs={11} md={8} lg={4}>
//           <TodoForm addTodo={addTodo} />
//           <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
// export default TodoApp;



