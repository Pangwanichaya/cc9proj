import React from "react";

function DrinkItem({ drink }) {
  return (
    <div class="imgpage2">
      <img src={drink.image} alt="" />
      <div class="textpage2">
        <p>{drink.name}</p>
        <p>
          {drink.price} &#3647; &nbsp;
          <button style={{ fontSize: "20px", border: "none", margin: "5px" }}>
            <i className="bi bi-cart-plus-fill"></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default DrinkItem;
