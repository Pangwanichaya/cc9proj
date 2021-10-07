import React from "react";

function ToppingItem({ topping }) {
  return (
    <div class="imgpage2">
      <img src={topping.image} alt="" />
      <div class="textpage2">
        <p>{topping.name}</p>
        <p>
          {topping.price} &#3647; &nbsp;
          <button style={{ fontSize: "20px", border: "none", margin: "5px" }}>
            <i className="bi bi-cart-plus-fill"></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default ToppingItem;
