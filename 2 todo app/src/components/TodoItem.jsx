import { MdDelete } from "react-icons/md";

function TodoItem({todoDate,todoName,handleDeleteButton}){

  return <div className="container">
    
  <div className="row kg-row">
    <div className="col-4">
      <p>{todoName}</p>
      </div>
    <div className="col-4">
      <p>{todoDate}</p>
      </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button" onClick={()=>handleDeleteButton(todoName)}><MdDelete /></button>
      </div>
    </div>
  </div>

}

export default TodoItem;