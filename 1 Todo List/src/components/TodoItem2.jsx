function TodoItem2(){

  let todoName = 'Go to gym';
  let todoDate = '25/12/2023';


  return <div className="container">
    
  <div className="row kg-row">
    <div className="col-4">
      <p>{todoName}</p>
      </div>
    <div className="col-4">
      <p>{todoDate}</p>
      </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </div>

}

export default TodoItem2;