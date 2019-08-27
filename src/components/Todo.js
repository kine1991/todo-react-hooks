import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


const Todo = ({task, completed, id, removeTodo}) => {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task} </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit"><EditIcon/></IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}><DeleteIcon/></IconButton>
      </ListItemSecondaryAction>
      
    </ListItem>
  //   <>
  //   <ListItem button><ListItemText>sss</ListItemText></ListItem>
  //   <ListItem button><ListItemText>qqq</ListItemText></ListItem>
  // </>
  )
}

export default Todo;



