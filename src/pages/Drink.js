import React from "react";
import { drinks } from "../data/data";
import DrinkItem from "../component/products/drink/DrinkItem";
function Drink() {
  return (
    <div>
      <section class="page5">
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </section>
    </div>
  );
}

export default Drink;
