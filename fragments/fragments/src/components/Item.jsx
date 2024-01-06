import styles from "./Item.module.css"
const Item = ({foodItems, bought, handleBuyButton})=>{


  return (
  <li className={`list-group-item kg-item ${bought ? "active": "inactive"}`}>
    <span className="kg-span">{foodItems}</span> 
    <button className={`${styles.button} btn btn-info` } onClick={handleBuyButton}>BUY</button >
  </li>
  );
};

export default Item;