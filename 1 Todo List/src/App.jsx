import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';
import "./App.css";


function App() {
  return <center class="todo-container">
     <AppName/><br/>
    <h1>hhh</h1>
     <div class="todo-item-container"> 
     <AddTodo/><br/>
      <TodoItem1/><br/>
     <TodoItem2/><br/>
     </div>
    
  </center>
   
}

export default App;