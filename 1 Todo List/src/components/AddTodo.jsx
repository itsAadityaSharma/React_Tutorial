function AddTodo(){
  return <div class="container">
  <div class="row kg-row">
    <div class="col-4">
      <input type="text" placeholder="Enter Todo tasks" />
      </div>
    <div class="col-4">
      <input type="date"/>
      </div>
    <div class="col-2">
    <button type="button" class="btn btn-success kg-button">ADD</button>

      </div>
    </div>
  </div>

}

export default AddTodo;