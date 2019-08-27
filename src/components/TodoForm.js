import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "../hooks/useInputState";


const TodoForm = ({addTodo}) => {
  const [value, handleChange, reset] = useInputState('')
  return (
    <Paper>
      <form onSubmit={e => {e.preventDefault(); addTodo(value); reset()}}> 
        <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
      </form>
    </Paper>
  )
}



export default TodoForm;



