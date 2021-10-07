import React from "react";
import { foods } from "../data/data";
import FoodItem from "../component/products/food/FoodItem";

function Food() {
  return (
    <div>
      <section class="page2">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </section>
    </div>
  );
}

export default Food;
