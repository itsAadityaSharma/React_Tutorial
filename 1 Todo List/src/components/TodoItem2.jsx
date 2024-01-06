function TodoItem2(){

  let todoName = 'Go to gym';
  let todoDate = '25/12/2023';


  return <div class="container">
    
  <div class="row kg-row">
    <div class="col-4">
      <p>{todoName}</p>
      </div>
    <div class="col-4">
      <p>{todoDate}</p>
      </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </div>

}

export default TodoItem2;