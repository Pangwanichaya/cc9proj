import React from "react";
import PancakeItem from "../component/products/pancake/PancakeItem";
import { pancakes } from "../data/data";

function Pancake() {
  return (
    <div>
      <div class="textpage3">
        <a href="/toppingpancake">
          <i class="bi bi-bag-plus" style={{ fontSize: "28px" }}></i>
          &nbsp;เลือก&nbsp;ท็อปปิ้งด้วยตัวเอง
        </a>
      </div>
      <section className="page3">
        {pancakes.map((pancake) => (
          <PancakeItem key={pancake.id} pancake={pancake} />
        ))}
      </section>
    </div>
  );
}

export default Pancake;
