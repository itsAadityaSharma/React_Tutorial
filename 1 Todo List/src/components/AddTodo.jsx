function AddTodo(){
  return <div className="container">
  <div className="row kg-row">
    <div className="col-4">
      <input type="text" placeholder="Enter Todo tasks" />
      </div>
    <div className="col-4">
      <input type="date"/>
      </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-button">ADD</button>

      </div>
    </div>
  </div>

}

export default AddTodo;