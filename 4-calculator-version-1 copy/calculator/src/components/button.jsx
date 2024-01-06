import styles from"./button.module.css"

const Button =({buttons})=>{
  return <>
  {buttons.map(item=><button className={styles.button} key={item}>{item}</button> )}
  </>

}

export default Button;