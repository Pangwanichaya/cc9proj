import React from "react";

function FoodItem({ food }) {
  return (
    <div class="imgpage2">
      <img src={food.image} alt="" />
      <div class="textpage2">
        <p>{food.name}</p>
        <p>
          {food.price} &#3647;
          <button style={{ fontSize: "20px", border: "none", margin: "5px" }}>
            <i className="bi bi-cart-plus-fill"></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
