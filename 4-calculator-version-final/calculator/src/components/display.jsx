import styles from "./display.module.css"

const Display = ({displayValue})=>{
  return <input type="text" name="" value={displayValue} readOnly className={styles.display} />
}

export default Display;