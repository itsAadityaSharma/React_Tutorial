import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "./App.css";
import { useState, useReducer } from 'react';
import { MdFileDownload } from "react-icons/md";
import TodoItemsContextProvider, { TodoItemsContext } from './store/todo-items-store';


function App() {
 
  
  return(
    <TodoItemsContextProvider>
     <center className="todo-container">
     <AppName/><br/>
     <AddTodo/><br/>
      <WelcomeMsg/>
     <TodoItems/>
    </center>
    </TodoItemsContextProvider>
  );
}
export default App;