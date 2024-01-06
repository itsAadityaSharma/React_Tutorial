import styles from "./App.module.css";
import ButtonContainer from "./components/buttonContainer";
import Display from "./components/display";

function App() {
  return <div className={styles.calculator} >
    <Display></Display>
    <ButtonContainer/>
  </div> 
}

export default App
