import Item from "./Item";
import { useState } from "react";

const FoodItems = ({items})=>{

  let [activeItems,setActiveItems]=useState([]);

  let onBuyButton=(items,event)=>{
    let newItems=[...activeItems,items];
    setActiveItems(newItems);
  }
  
  return (
  <ul className="list-group">
      {items.map(items => <Item key={items} foodItems={items} bought={activeItems.includes(items)}handleBuyButton={(event)=>onBuyButton(items,event)}></Item>)}
    </ul>
  );
};

export default FoodItems;