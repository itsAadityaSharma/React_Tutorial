import styles from"./button.module.css"

const Button =({buttons,onClickThis})=>{
  return <>
  {buttons.map(item=><button onClick={()=> onClickThis(item)} className={styles.button} key={item}>{item}</button> )}
  </>

}

export default Button;