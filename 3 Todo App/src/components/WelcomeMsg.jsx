import styles from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg=()=>{

  const {todoItemList} = useContext(TodoItemsContext);

  return (
    todoItemList.length===0 && <p className={styles.welcome}>All Tasks completed, Enjoy your day</p>
  );
}

export default WelcomeMsg;