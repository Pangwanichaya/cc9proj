import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../context/orderContext";
import { SearchContext } from "../context/searchContext";

function Admin1() {
  let count = 1;
  const { order } = useContext(OrderContext);

  const { searchNameText } = useContext(SearchContext);

  // console.log(order);

  const sortOrder = [...order].sort((a, b) => b.id - a.id);

  const history = useHistory();

  const handleClickUpdate = () => {
    history.push("/adminupdatesummary");
  };

  // search
  const filterOrders = sortOrder.filter(
    (item) =>
      item.User.name.toLowerCase().includes(searchNameText.toLowerCase()) ||
      item.User.name.toLowerCase().includes(searchNameText.toLowerCase())
  );
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
        <a id="textadmin" style={{ backgroundColor: "#e8bcbc" }} href="/admin1">
          ใบเสร็จ
        </a>
        {/* <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin2">
          รายการสั่งซื้อ
        </a> */}
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin3">
          คลังสินค้า
        </a>
        {/* <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin4">
          ข้อเสนอแนะลูกค้า
        </a>
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin5">
          คูปอง
        </a> */}
      </div>
      <div class="tableadmin1">
        <table id="table1" style={{ width: "60%" }}>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>สถานะชำระเงิน</th>
            <th>ยอดรวม</th>
            <th>อัพเดท</th>
            <th>แก้ไข</th>
          </tr>
          {filterOrders.map((order) => (
            <tr key={order.id}>
              <td>{count++}</td>
              <td>{order.User.name}</td>
              <td>{new Date(order.orderdate).toDateString()}</td>
              <td>
                <font
                  className={`${
                    order.paymentstatus === "COMPLETED"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {order.paymentstatus}
                </font>
              </td>
              <td>
                <td>
                  {order.OrderItems.reduce(
                    (acc, product) =>
                      +acc + +product.productprice * +product.qty,
                    0
                  )}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `/adminupdatesummary/${order.id}`,
                      state: order,
                    }}
                    className="button-table blue"
                  >
                    <i className="bi bi-gear" onClick={handleClickUpdate}></i>
                  </Link>
                </td>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Admin1;
