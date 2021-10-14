import { useContext } from "react";
// import PancakeItem from "../component/products/pancake/PancakeItem";
// import { pancakes } from "../data/data";
import { AddContext } from "../context/addContext";
function Pancake() {
  const { product, onAdd } = useContext(AddContext);
  return (
    <div>
      <div class="textpage3">
        <a href="/toppingpancake">
          <i class="bi bi-bag-plus" style={{ fontSize: "28px" }}></i>
          &nbsp;เลือก&nbsp;ท็อปปิ้งด้วยตัวเอง
        </a>
      </div>
      <section className="page3">
        {product.map((item) => {
          return (
            <div class="imgpage2" key={item.categoryId}>
              <img src={item.picurl} alt="" />
              <div class="textpage2">
                <p>{item.productname}</p>
                <p>
                  {item.productprice} <span>฿</span>
                  <button
                    onClick={() => onAdd(item)}
                    style={{ fontSize: "20px", border: "none", margin: "5px" }}
                  >
                    <i className="bi bi-cart-plus-fill"></i>
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Pancake;
