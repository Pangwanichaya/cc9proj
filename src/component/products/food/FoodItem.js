import React, { useState } from "react";
function FoodItem({ food }) {
  const [foodItem, setFoodItem] = useState([]);

  const onAdd = (foods) => {
    const idx = foodItem.findIndex((x) => x.id === foods.id);
    const newItem = [...foodItem];
    if (idx > -1) {
      newItem[idx] = { ...newItem[idx], qty: newItem[idx].qty + 1 };
    } else {
      newItem.push({ ...foods, qty: 1 });
    }
    setFoodItem(newItem);
  };
  return (
    <div class="imgpage2">
      <img src={food.image} alt="" />
      <div class="textpage2">
        <p>{food.name}</p>
        <p>
          {food.price} &#3647;
          <button
            onClick={() => onAdd(food)}
            style={{ fontSize: "20px", border: "none", margin: "5px" }}
          >
            <i className="bi bi-cart-plus-fill"></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
