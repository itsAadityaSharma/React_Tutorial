import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({addToDoItemsFun}){

  const[todoname,settodoname]=useState("");
  const[todoDate,settodoDate]=useState("");

  let handleNameChange=(event)=>{
    settodoname(event.target.value);
    
  }

  let handleDateChange=(event)=>{
    settodoDate(event.target.value);
  }

  let handleAddButton=()=>{
    addToDoItemsFun(todoname,todoDate)
    settodoname("");
    settodoDate("");

  };


  return <div className="container">
  <div className="row kg-row">
    <div className="col-4">
      <input type="text" placeholder="Enter Todo tasks" onChange={handleNameChange} value={todoname} />
      </div>
    <div className="col-4">
      <input type="date" onChange={handleDateChange} value={todoDate} />
      </div>
    <div className="col-2">
    <button type="button" onClick={handleAddButton} className="btn btn-success kg-button"><MdAddBox /></button>

      </div>
    </div>
  </div>

}

export default AddTodo;