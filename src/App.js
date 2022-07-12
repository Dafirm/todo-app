import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import db from './firebase';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here.. fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[]);

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');

  }
  return (
    <div className="App">
      <h1>
        hello
      </h1>
      <form>
        <FormControl>
          <InputLabel>Write your Todo</InputLabel>
          <Input value={input} onChange= {event => setInput(event.target.value)}/>
        </FormControl>

          <Button disabled={!input} type ='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
          {/* {<button type ='submit'   onClick={addTodo}>Add Todo</button>} */}
       
      </form>
      
      <ul>

        {todos.map(todo => (
          <Todo text = {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
