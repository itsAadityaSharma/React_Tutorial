import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = ({})=>{

  const {todoItemList} = useContext(TodoItemsContext);
  

  return (
    <div className="todo-item-container">

      {todoItemList.map(item => <TodoItem 
      key={item.name} todoDate={item.dueDate} todoName={item.name}/>)}

     </div>
  );
}
export default TodoItems;