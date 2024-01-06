import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMsg from './components/errorMsg';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';


function App() {


  let [textToShow,setTextState]=useState("Food Item Entered By User");

  let [foodItems,setFoodItems]=useState([]);

  console.log(`Current value of textState : ${textToShow}`);
   

  const handleOnKeyDown=(event)=> {console.log(event);
    if(event.code==="Enter"){
      let newFood =[...foodItems,event.target.value];
      event.target.value="";
      setFoodItems(newFood);

    }
    setTextState(event.target.value);
  };

  return (
    <>
    <Container>
       <h1 className='kg-heading'>Healthy    Foods</h1>
       
       
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <ErrorMsg items={foodItems}></   ErrorMsg>
       <FoodItems items={foodItems}></FoodItems>

    </Container>
    
    </>
  );
  
}
export default App;