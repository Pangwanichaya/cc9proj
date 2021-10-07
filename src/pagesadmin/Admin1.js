import React from "react";

function Admin1() {
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
        <a
          id="textadmin"
          style={{ backgroundColor: "#e8bcbc" }}
          href="./admin1.html"
        >
          ใบเสร็จ
        </a>
        <a
          id="textadmin"
          style={{ backgroundColor: "#c4c4c4" }}
          href="./admin2.html"
        >
          รายการสั่งซื้อ
        </a>
        <a
          id="textadmin"
          style={{ backgroundColor: "#c4c4c4" }}
          href="./admin3.html"
        >
          คลังสินค้า
        </a>
        <a
          id="textadmin"
          style={{ backgroundColor: "#c4c4c4" }}
          href="./admin4.html"
        >
          ข้อเสนอแนะลูกค้า
        </a>
        <a
          id="textadmin"
          style={{ backgroundColor: "#c4c4c4" }}
          href="./admin5.html"
        >
          คูปอง
        </a>
      </div>
      <div class="tableadmin1">
        <table id="table1" style={{ width: "60%" }}>
          <tr>
            <th>Username</th>
            <th>อัพโหลดสลิป</th>
            <th>วันที่ และ เวลา</th>
            <th>แก้ไข</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>
              <a style={{ margin: "10px" }} href="/">
                แก้ไข
              </a>
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

export default Admin1;
