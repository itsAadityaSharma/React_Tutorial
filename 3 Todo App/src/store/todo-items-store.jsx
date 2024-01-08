import { createContext } from "react"; 
import { useReducer } from 'react';

export const TodoItemsContext = createContext({todoItemList:[], 
  addNewItem:()=>{},
  deleteItem:()=>{}
  
});

const todoItemReducer = (currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if(action.type==='NEW_ITEM'){
      newTodoItems=[...currTodoItems,{name:action.payload.itemName,
      dueDate:action.payload.itemDueDate}];
  }
  else if(action.type==='DELETE_ITEM'){
    newTodoItems=currTodoItems.filter(item => item.name!==action.payload.toItemName);
  }
  return newTodoItems;
}

const TodoItemsContextProvider=({children})=>{
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
    // const newTodoItem=todoItemList.filter(item => item.name!==toItemName);

    const deleteItemAction = {
      type:"DELETE_ITEM",
      payload:{
        toItemName
      }
    };

    dispatchTodoItem(deleteItemAction);
  };

  return <TodoItemsContext.Provider value={{todoItemList:todoItemList, 
    addNewItem:addToDoItemsFun,deleteItem:handleDeleteButton
    }}>{children}</TodoItemsContext.Provider>


}
export default TodoItemsContextProvider;
//hi