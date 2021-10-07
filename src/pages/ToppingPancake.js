import React from "react";
import ToppingItem from "../component/products/topping/ToppingItem";
import { toppingpancakes } from "../data/data";
import p1 from "../pic/pancaketopping/Pancakes1 (Custom).jpg";
function ToppingPancake() {
  return (
    <>
      <div class="textpage4">
        <h5>เลือก&nbsp;ท็อปปิ้งด้วยตัวเอง</h5>
        <img id="img" src={p1} alt="" />
      </div>

      <section class="page4">
        {toppingpancakes.map((topping) => (
          <ToppingItem key={topping.id} topping={topping} />
        ))}
      </section>
    </>
  );
}

export default ToppingPancake;
