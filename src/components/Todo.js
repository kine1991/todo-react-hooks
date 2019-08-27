import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from '../hooks/useToggleState'
import EditTodoForm from './EditTodoForm'

const Todo = ({task, completed, id, toggleTodo,  removeTodo, editTodo}) => {
  const [isEditing, toggleIsEditing] = useToggleState(false)
  return (
      <ListItem style={{height: "64px"}}>
      {isEditing ? 
        (<EditTodoForm editTodo={editTodo} toggleIsEditing={toggleIsEditing} task={task} id={id}/>)
        : 
        (
          <>
            <Checkbox checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task} </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={toggleIsEditing} ><EditIcon/></IconButton>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}><DeleteIcon/></IconButton>
            </ListItemSecondaryAction>
          </>
        )
    } 
        </ListItem>

  //   <>
  //   <ListItem button><ListItemText>sss</ListItemText></ListItem>
  //   <ListItem button><ListItemText>qqq</ListItemText></ListItem>
  // </>
  )
}

export default Todo;



