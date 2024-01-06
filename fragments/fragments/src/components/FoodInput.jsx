import styles from "./FoodInput.module.css"

const FoodInput=({handleOnKeyDown})=>{


  return <>
    <input className={styles.foodInput} onKeyDown={handleOnKeyDown} type='text' placeholder="Enter Food Item here"></input>
    {/* <button onClick={addItem}>ADD</button> */}
    
  </>
}

export default FoodInput;