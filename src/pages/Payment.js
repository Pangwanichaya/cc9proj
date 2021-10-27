import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Payment.css";
import { AddContext } from "../context/addContext";
import { OrderContext } from "../context/orderContext";
import axios from "../config/axios";
import Swal from "sweetalert2";

function Payment() {
  // useContext รวบมาส่ง
  const { total, productItems, setProductItems } = useContext(AddContext);
  const { setToggleFetch } = useContext(OrderContext);

  // console.log(`ดู cartItems: ${cartItems}`);

  // console.log(cartItems);
  // State เก็บค่าจาก cartContext.js
  // const [productamount, setProductamount] = useState(cartItems.productamount);
  // const [productprice, setProductprice] = useState(cartItems.productprice);
  // const [productId, setProductId] = useState(cartItems.productId);

  // console.log(productamount);
  // console.log(productprice);
  // console.log(productId);

  // State Form
  const [orderdate, setOrderdate] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankno, setBankno] = useState("");
  const [picurl, setPicurl] = useState("");

  const history = useHistory();

  // const handleClickPayment = () => {
  //   history.push('/CustomerOrder');
  // };

  // image
  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setPicurl(e.target.files[0]);
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("orderdate", orderdate);
    formData.append("bankname", bankname);
    formData.append("bankno", bankno);
    formData.append("picurl", picurl);
    // แปลงค่า ก่อนส่ง ให้เป็น String
    formData.append("cartitems", JSON.stringify(productItems));

    // ส่งไป back end
    axios.post("/order", formData).then((res) => {
      setToggleFetch((cur) => !cur);
      setProductItems([]);
      Swal.fire({
        title: "Success",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "OK",
      });
      history.push({ pathname: "/ordersummary" });
    });
  };

  return (
    <div className="form-scope width-700">
      <header>ชำระเงิน</header>
      <form onSubmit={handleSubmitPayment}>
        <div class="summary">
          <div class="summary-text">
            <h3>ยอดรวมทั้งหมด</h3>
          </div>
          <div class="summary-price">
            <h3>{total}</h3>
          </div>
        </div>
        <div class="bank">
          <div class="bank-title">
            <h3>ชำระเงินผ่านบัญชีธนาคาร</h3>
          </div>
          <div class="bank-detail">
            <h4>ธนาคารกสิกรไทย</h4>
            <h4>ชื่อบัญชี บริษัท แพนเค้กคาเฟ่ จำกัด</h4>
            <h4>เลขบัญชี: 877-9999-999</h4>
          </div>
          <div class="bank-detail">
            <h4>ธนาคารทหารไทย</h4>
            <h4>ชื่อบัญชี บริษัท แพนเค้กคาเฟ่ จำกัด</h4>
            <h4>เลขบัญชี: 999-9999-999</h4>
          </div>
        </div>
        <div className="dbl-field">
          <div className="field">
            <select
              name="bankname"
              id="bankname"
              value={bankname}
              onChange={(e) => setBankname(e.target.value)}
            >
              <option value="">เลือกธนาคารที่โอน</option>
              <option value="ไทยพาณิชย์SCB">กสิกรไทย</option>
              <option value="ทหารไทยTMB">ทหารไทย</option>
            </select>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="เลขบัญชี"
              value={bankno}
              onChange={(e) => setBankno(e.target.value)}
            />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="dbl-field">
          <div className="field">
            <input
              placeholder="เลือกวันที่โอนเงิน"
              type="text"
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => (e.currentTarget.type = "text")}
              id="date"
              value={orderdate}
              onChange={(e) => setOrderdate(e.target.value)}
            />
            <i class="far fa-calendar-alt"></i>
          </div>
          <div className="field">
            <input
              type="file"
              id="myfile"
              name="myfile"
              class="upload-box"
              onChange={handleChangeFile}
            />
          </div>
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

export default Payment;
