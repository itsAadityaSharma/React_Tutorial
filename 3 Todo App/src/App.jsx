import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "./App.css";
import { useState, useReducer } from 'react';
import { MdFileDownload } from "react-icons/md";
import { TodoItemsContext } from './store/todo-items-store';


const todoItemReducer = (currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if(action.type==='NEW_ITEM'){
      newTodoItems=[...currTodoItems,{name:action.payload.itemName,
      dueDate:action.payload.itemDueDate}];
  }
  else if(action.type==='DELETE_ITEM'){

  }
  return newTodoItems;
}

function App() {
 
  //const [todoItemList,setTodoItemList]=useState([]);
  const [todoItemList,dispatchTodoItem] = useReducer(todoItemReducer,[]);

  const addToDoItemsFun=(itemName,itemDueDate)=>{

    const newItemAction = {
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    
    dispatchTodoItem(newItemAction);
  
    // let newTodoItems=[...todoItemList,{name:itemName,
    // dueDate:itemDueDate}];
    // setTodoItemList(newTodoItems);  

  };

  const handleDeleteButton=(toItemName)=>{
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