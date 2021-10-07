import React from "react";

function PancakeItem({ pancake }) {
  return (
    <div className="imgpage2">
      <img src={pancake.image} alt="" />
      <div class="textpage2">
        <p>{pancake.name}</p>
        <p>
          {pancake.price} &#3647; &nbsp;
          <button style={{ fontSize: "20px", border: "none", margin: "5px" }}>
            <i className="bi bi-cart-plus-fill"></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default PancakeItem;
