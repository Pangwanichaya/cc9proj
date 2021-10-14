import { useContext } from "react";
import { AddContext } from "../../../context/addContext";
function FoodItem() {
  const { product, onAdd } = useContext(AddContext);

  return (
    <section>
      {product.map((item) => {
        return (
          <div class="imgpage2" key={item.id}>
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
  );
}

export default FoodItem;
