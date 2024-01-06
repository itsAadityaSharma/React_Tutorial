import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "./App.css";
import { useState } from 'react';
import { MdFileDownload } from "react-icons/md";

 
function App() {
 

  const [todoItemList,setTodoItemList]=useState([]);


  const addToDoItemsFun=(itemName,itemDueDate)=>{
    // console.log(`Two Items added ${itemName} and ${itemDueDate} `);

    let newTodoItems=[...todoItemList,{name:itemName,
    dueDate:itemDueDate}];
    setTodoItemList(newTodoItems);  

  };

  const handleDeleteButton=(toItemName)=>{
    console.log(`Item deleted ${toItemName}`);
    const newTodoItem=todoItemList.filter(item => item.name!==toItemName);
    setTodoItemList(newTodoItem);
  };

  return <center className="todo-container">
     <AppName/><br/>
     <AddTodo addToDoItemsFun={addToDoItemsFun}/><br/>
     {todoItemList.length==0 && <WelcomeMsg todoItems={todoItemList}/> }
     
     <TodoItems todoItems={todoItemList} handleDeleteButton={handleDeleteButton} />
     
  </center>
   
}
export default App;