import { createContext } from "react"; 

export const TodoItemsContext = createContext({todoItemList:[], 
  addNewItem:()=>{},
  deleteItem:()=>{}
  
});