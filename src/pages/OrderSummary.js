import { useContext, useEffect, useState } from "react";
import { AddContext } from "../context/addContext";
import { AuthContext } from "../context/authContext";
import { useHistory } from "react-router-dom";
import axios from "../config/axios";
// import "./ProductCart.css";

function OrderSummary() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [getUser, setGetUser] = useState([]);

  const { productItems, onAdd, onRemove, onDeleteItem, setTotal, total } =
    useContext(AddContext);

  let itemPrices = productItems.reduce((a, c) => a + c.productprice * c.qty, 0);

  setTotal(itemPrices);
  // const qty = productItems.reduce(
  //   (acumulator, item) => acumulator + item.qty,
  //   0
  // );
  const handlepayment = () => {
    history.push("/payment");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/profile/${user.id}`);
        const resUser = res.data.user;
        // console.log(resUser);
        setGetUser(resUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <div id="texttoppage11">
        <p id="textpage11">สรุปการสั่งซื้อ</p>
      </div>
      <section class="page11">
        <div class="addresspage11">
          <p style={{ marginLeft: "20px", fontSize: "18px" }}>ที่อยู่</p>
          <p style={{ marginLeft: "20px" }}>ชื่อ-นามสกุล : {getUser.name} </p>
          <p style={{ marginLeft: "20px" }}>เบอร์โทรศัพท์ : {getUser.phone}</p>
          <p style={{ marginLeft: "20px" }}>ที่อยู่ : {getUser.address}</p>

          <div
            style={{ position: "relative", left: "85%", bottom: "50%" }}
            class="changepage11"
          >
            <a href="/">แก้ไข</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/"> ลบ</a>
          </div>
        </div>
        <div className="orderpage11">
          {productItems.length === 0 ? (
            <div className="cart">
              <h1 style={{ color: "red", textAlign: "center" }}>ไม่พบสินค้า</h1>
            </div>
          ) : (
            <div className="cart">
              <div style={{ margin: "20px" }}>ตะกร้าสินค้า</div>
              <div className="cart">
                {productItems.map((item) => (
                  <div key={item.id}>
                    <div className="cartpic">
                      <img
                        src={item.picurl}
                        alt=""
                        style={{ width: "100px", margin: "10px" }}
                      />
                      <div style={{ textAlign: "right", margin: "10px" }}>
                        <i
                          className="bi bi-cart-x"
                          onClick={() => onRemove(item)}
                          style={{ margin: "10px", fontSize: "1.5rem" }}
                        ></i>
                        <i
                          className="bi bi-cart-plus"
                          onClick={() => onAdd(item)}
                          style={{ margin: "10px", fontSize: "1.5rem" }}
                        ></i>
                      </div>
                    </div>
                    <div>
                      <p style={{ margin: "10px", padding: "10px" }}>
                        ชื่อสินค้า : {item.productname}
                      </p>
                      <p style={{ margin: "10px" }}>
                        <span style={{ margin: "10px" }}>
                          รายละเอียดสินค้า : {item.productdetail}
                        </span>
                      </p>
                      <p style={{ display: "flex", justifyContent: "end" }}>
                        ราคาต่อชิ้น : <span>{item.productprice}</span>
                      </p>

                      <div>
                        <div>
                          <div>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "end",
                                margin: "15px",
                              }}
                            >
                              จำนวน : {item.qty} ชิ้น
                            </span>
                          </div>
                          <hr />
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div class="couponpage11">
          <div class="submitpage11">
            <div id="textpage11">
              <p style={{ marginRight: "10px" }}>
                รวมทั้งหมด :<span>฿{total.toFixed(2)}</span>
              </p>
              {/* <p style={{ marginRight: "10px" }}>ส่วนลด: #&nbsp;&#3647;</p> */}
            </div>
            <a
              href="#"
              onClick={handlepayment}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              ชำระเงิน
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSummary;
