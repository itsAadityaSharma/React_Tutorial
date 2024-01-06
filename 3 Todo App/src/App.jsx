import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "./App.css";
import { useState } from 'react';
import { MdFileDownload } from "react-icons/md";
import { TodoItemsContext } from './store/todo-items-store';


function App() {
 
  const [todoItemList,setTodoItemList]=useState([]);

  const addToDoItemsFun=(itemName,itemDueDate)=>{
  
    let newTodoItems=[...todoItemList,{name:itemName,
    dueDate:itemDueDate}];
    setTodoItemList(newTodoItems);  

  };

  const handleDeleteButton=(toItemName)=>{
    console.log(`Item deleted ${toItemName}`);
    const newTodoItem=todoItemList.filter(item => item.name!==toItemName);
    setTodoItemList(newTodoItem);
  };

  return(
    <TodoItemsContext.Provider value={{todoItemList:todoItemList, 
    addNewItem:addToDoItemsFun,deleteItem:handleDeleteButton
    }}>
     <center className="todo-container">
     <AppName/><br/>
     <AddTodo/><br/>
      <WelcomeMsg/>
     <TodoItems/>
     
    </center>
  </TodoItemsContext.Provider>
  );
}
export default App;