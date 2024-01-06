import Button from "./button";
import styles from "./buttonContainers.module.css"

const ButtonContainer = ()=>{

  const buttonArray=['C','=','0','1','2','3','4','5','6','7','8','9','+','-','*','/'];

   return <>
   <div className={styles.buttonsContainer}>
    <Button buttons={buttonArray}/>
    </div>
  </>
}

export default ButtonContainer;