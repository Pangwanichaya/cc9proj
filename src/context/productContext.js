import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

//call context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get("/product");
        const resProducts = res.data.products;
        console.log(resProducts);
        setProducts(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getproducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
