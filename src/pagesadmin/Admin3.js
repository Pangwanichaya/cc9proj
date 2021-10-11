import React from "react";
import { useHistory } from "react-router-dom";

function Admin3() {
  const history = useHistory();
  const handleAddProduct = () => {
    history.push("/adminaddproduct");
  };
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
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin2">
          รายการสั่งซื้อ
        </a>
        <a id="textadmin" style={{ backgroundColor: "#e8bcbc" }} href="/admin3">
          คลังสินค้า
        </a>
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin4">
          ข้อเสนอแนะลูกค้า
        </a>
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin5">
          คูปอง
        </a>
      </div>
      <div class="tableadmin1">
        <div className="btnAdd ">
          <button onClick={handleAddProduct}>
            <i class="fas fa-plus"></i> เพิ่มสินค้า
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
          <tr>
            <td>Jill</td>
            <td>xxx</td>
            <td>xxx</td>
            <td>xxxx</td>
            <td>xxxx</td>
            <td>
              <a href="#">
                <i class="bi bi-hammer"></i>
              </a>
            </td>
            <td>
              <a href="/">
                <i class="bi bi-trash"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Admin3;
