import React from "react";

function Admin4() {
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
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin3">
          คลังสินค้า
        </a>
        <a id="textadmin" style={{ backgroundColor: "#e8bcbc" }} href="/admin4">
          ข้อเสนอแนะลูกค้า
        </a>
        <a id="textadmin" style={{ backgroundColor: "#c4c4c4" }} href="/admin5">
          คูปอง
        </a>
      </div>
      <div class="tableadmin1">
        <table id="table1" style={{ width: "60%" }}>
          <tr>
            <th>Username</th>
            <th>ข้อเสนอแนะ</th>
            <th>วันที่ และ เวลา</th>
            <th>แก้ไข</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>
              <a href="/">
                &nbsp; <i class="bi bi-trash"></i> ลบ
              </a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Admin4;
