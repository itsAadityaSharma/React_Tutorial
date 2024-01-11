function TodoItem1(){

  let todoName = 'Buy Milk';
  let todoDate = '20/12/2023';


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

export default TodoItem1;