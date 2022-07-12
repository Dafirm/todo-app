import React from 'react';
import {  List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

const Todo = (props) => {
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Dummy deadline"/>
        </ListItem>
    </List>
  )
}

export default Todo