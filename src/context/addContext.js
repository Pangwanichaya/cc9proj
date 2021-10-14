import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

// ประกาศ Context
const AddContext = createContext();

function AddContextProvider({ children }) {
  //======================================= state =======================================
  //useState Product
  const [product, setProduct] = useState([]);

  //useState Product
  const [productItems, setProductItems] = useState([]);

  const [total, setTotal] = useState(0);

  //======================================= useEffect fetch product =======================================

  // use Effect fetch products
  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get("/product");
        const resProducts = res.data.products;
        //==========================
        // console.log(resProducts);
        //==========================
        setProduct(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getproducts();
  }, []);

  //======================================= function เพิ่ม =======================================

  const onAdd = (product) => {
    const idx = productItems.findIndex((x) => x.id === product.id);
    const newAdd = [...productItems];
    if (idx > -1) {
      newAdd[idx] = { ...newAdd[idx], qty: newAdd[idx].qty + 1 };
    } else {
      newAdd.push({ ...product, qty: 1 });
    }

    setProductItems(newAdd);
  };

  //======================================= function ลบ =======================================

  const onRemove = (product) => {
    // const exist = cartItems.find(x => x.id === product.id)
    if (product.qty === 1) {
      setProductItems(productItems.filter((x) => x.id !== product.id));
    } else {
      setProductItems(
        productItems.map((x) =>
          x.id === product.id ? { ...product, qty: product.qty - 1 } : x
        )
      );
    }
  };
  //======================================= function ลบ item =======================================

  const onDeleteItem = (item) => {
    const idx = productItems.findIndex((x) => x.id === item.id);

    if (idx !== -1) {
      const newProducts = [...productItems];
      newProducts.splice(idx, 1);
      setProductItems(newProducts);
    }
  };
  //ส่ง prop
  return (
    <AddContext.Provider
      value={{
        product,
        setProduct,
        productItems,
        setProductItems,
        onAdd,
        onRemove,
        onDeleteItem,
        total,
        setTotal,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

// export ออกไป
export { AddContext, AddContextProvider };
