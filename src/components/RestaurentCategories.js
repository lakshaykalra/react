import { useState } from "react";
import { Item } from "./ItemList";

export default RestaurentCategories = ({ menu, setIndex, showItems }) => {
  console.log("menu", menu);

  const handleClick = () => {
    setIndex()
  }


  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold text-1xl cursor-pointer " onClick={handleClick}>
          {menu.card.card.title + `(${menu.card.card.itemCards.length})`}
        </span>
        <span>{menu.card.card.title}</span>
      </div>

      <div>
        { showItems && menu.card.card.itemCards.map((element) => (
          <Item item={element.card.info} />
        ))}
      </div>
    </div>
  );
};
