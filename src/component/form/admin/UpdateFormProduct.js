import React from "react";
import "./Form.css";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "../../../config/axios";

function AddFormProduct() {
  const location = useLocation();
  const history = useHistory();

  const [optionCategory, setOptionCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("/category");
        const fetChcategorys = res.data.categorys;
        console.log(fetChcategorys);
        setOptionCategory(fetChcategorys);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCategory();
  }, []);
  const [category, setCategory] = useState(location.state.Category.id);
  // console.log(category);
  const [productname, setProductName] = useState(location.state.productname);
  const [productdetail, setProductdetail] = useState(
    location.state.productdetail
  );
  const [productprice, setProductprice] = useState(location.state.productprice);
  const [productamount, setProductamount] = useState(
    location.state.productamount
  );
  const [picurl, setPicurl] = useState(location.state.picurl);

  // image
  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setPicurl(e.target.files[0]);
  };

  const handleAddProduct = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("categoryId", category);
      formData.append("productname", productname);
      formData.append("productdetail", productdetail);
      formData.append("productprice", productprice);
      formData.append("productamount", productamount);
      formData.append("picurl", picurl);

      const res = await axios.put(`/product/${location.state.id}`, formData);

      // console.log(res.data);

      history.push("/admin3");
      window.location.reload();
    } catch (err) {
      console.log(err);
      // setErrorAddForm({ ...err, errBack: err.response.data.message });
    }
  };

  return (
    <div className="form-scope width-700">
      <header style={{ marginBottom: "15px" }}>เพิ่มข้อมูลสินค้า</header>

      <form onSubmit={handleAddProduct}>
        <div className="dbl-field">
          <div className="field">
            <select
              name="category"
              id="district"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">เลือกประเภทสินค้า</option>
              {optionCategory.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.categoryname}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="กรอกชื่อสินค้า"
              value={productname}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
        </div>

        <div className="dbl-field">
          <div className="field">
            <input
              type="text"
              placeholder="กรอกราคา"
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="กรอกจำนวน"
              value={productamount}
              onChange={(e) => setProductamount(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          {/* <input type='text' placeholder='รายละเอียด' /> */}
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="60"
            placeholder="กรอกรายละเอียดสินค้า"
            value={productdetail}
            onChange={(e) => setProductdetail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="file"
            id="myfile"
            name="myfile"
            className="upload-box"
            onChange={handleChangeFile}
          />
        </div>

        <div className="form-footer">
          <div className="button-area">
            <button type="reset" className="orange">
              reset
            </button>

            <button type="submit" className="green">
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddFormProduct;