import { useContext } from "react";
// import { foods } from "../data/data";
import { AddContext } from "../context/addContext";

function Food() {
  const { product, onAdd } = useContext(AddContext);
  // console.log(product);
  return (
    <div>
      <section class="page2">
        {product.map((item, idx) => {
          if (item.categoryId === 1) {
            return (
              <div class="imgpage2" key={idx}>
                <img id="pic" src={item.picurl} alt="" />
                <div class="textpage2">
                  <p>{item.productname}</p>
                  <p>
                    {item.productprice} <span>฿</span>
                    <button
                      onClick={() => onAdd(item)}
                      style={{
                        fontSize: "20px",
                        border: "none",
                        margin: "5px",
                      }}
                    >
                      <i className="bi bi-cart-plus-fill"></i>
                    </button>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}

export default Food;
