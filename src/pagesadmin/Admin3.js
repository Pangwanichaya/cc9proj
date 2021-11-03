import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "../config/axios";
import picProduct from "../images/productnon.png";
import Swal from "sweetalert2";

function Admin3() {
  let count = 1;
  const history = useHistory();
  const handleAddProduct = () => {
    history.push("/adminaddproduct");
  };

  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleClickDelete = async (e, id) => {
    try {
      Swal.fire({
        title: "ต้องการลบหรือไม่",
        // text: "You won't be logout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/product/${id}`);
          window.location.reload();
          setToggle((c) => !c);
        }
      });

      // console.log(id);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/product");
        const resProducts = res.data.products;
        // console.log(resProducts);
        setProducts(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [toggle]);

  return (
    <>
      <section class="pageadmin">
        <div id="texttop">
          <p>
            <i
              style={{ fontSize: "24px" }}
              className="bi bi-receipt-cutoff"
            ></i>
            &nbsp;&nbsp;แผงควบคุมหลัก
          </p>
        </div>
        <hr style={{ width: "90%" }} />
      </section>
      <div
        style={{ boxSizing: "border-box", margin: "10px" }}
        class="headeradmin"
      >
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin1">
          ใบเสร็จ
        </a>

        <a id="textadmin" style={{ backgroundColor: "#e8bcbc" }} href="/admin3">
          คลังสินค้า
        </a>
      </div>
      <div className="tableadmin1">
        <div className="btnAdd ">
          <button onClick={handleAddProduct}>
            <i className="fas fa-plus"></i> เพิ่มสินค้า
          </button>
        </div>
        <table id="table1" style={{ width: "60%" }}>
          <tr>
            <th>ลำดับ</th>
            <th>ประเภท</th>
            <th>ภาพ</th>
            <th>ราคา</th>
            <th>รายละเอียด</th>
            <th>แก้ไข</th>
            <th>ลบ</th>
          </tr>
          {products.map((item) => {
            return (
              <tr>
                <td data-label="ลำดับ">{count++}</td>
                <td data-label="ประเภท">{item.Category.categoryname}</td>
                <td data-label="ภาพ">
                  {item.picurl ? (
                    <img src={item.picurl} alt="product" />
                  ) : (
                    <img src={picProduct} alt="product" />
                  )}
                </td>
                <td data-label="Product Price">{item.productprice}</td>
                <td data-label="Product Detail">{item.productdetail}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/adminupdateproduct/${item.id}`,
                      state: item,
                    }}
                  >
                    <i class="bi bi-hammer"></i>
                  </Link>
                </td>
                <td data-label="Cancle">
                  <button
                    className="button-table red"
                    onClick={(e) => handleClickDelete(e, item.id)}
                  >
                    <i className="fas fa-window-close"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Admin3;
