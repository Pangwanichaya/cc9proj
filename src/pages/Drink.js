import { useContext } from "react";
// import { drinks } from "../data/data";
// import DrinkItem from "../component/products/drink/DrinkItem";
import { AddContext } from "../context/addContext";
function Drink() {
  const { product, onAdd } = useContext(AddContext);
  return (
    <div>
      <section class="page5">
        {product.map((item) => {
          if (item.categoryId === 3) {
            return (
              <div class="imgpage2" key={item.categoryId}>
                <img src={item.picurl} alt="" />
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

export default Drink;
