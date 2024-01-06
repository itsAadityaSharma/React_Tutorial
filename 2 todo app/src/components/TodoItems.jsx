import TodoItem from "./TodoItem";

const TodoItems = ({todoItems,handleDeleteButton})=>{
  return <>
    <div className="todo-item-container">

      {todoItems.map(item => <TodoItem 
      key={item.name} todoDate={item.dueDate} todoName={item.name} handleDeleteButton={handleDeleteButton}/>)}

     </div>
</>
}
export default TodoItems;