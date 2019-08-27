import React from 'react'
import TextField from "@material-ui/core/TextField";
import useInputState from '../hooks/useInputState'

const EditTodoForm = ({editTodo, toggleIsEditing, id, task}) => {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form style={{marginLeft:"1rem", width: "100%"}} onSubmit={(e) => {e.preventDefault(); editTodo(id, value); reset(); toggleIsEditing();}}>
            <TextField onChange={handleChange} value={value} margin='normal' fullWidth/>
        </form>
    )
}

export default EditTodoForm
