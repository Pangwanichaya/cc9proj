import React, { useState } from "react";

function OrderSummary() {
  return (
    <>
      <div id="texttoppage11">
        <p id="textpage11">สรุปการสั่งซื้อ</p>
      </div>
      <section class="page11">
        <div class="addresspage11">
          <p style={{ marginLeft: "20px", fontSize: "18px" }}>ที่อยู่</p>
          <p style={{ marginLeft: "20px" }}>ชื่อ-นามสกุล &#58; </p>
          <p style={{ marginLeft: "20px" }}>เบอร์โทรศัพท์ &#58; </p>
          <p style={{ marginLeft: "20px" }}>ที่อยู่ &#58; </p>

          <div
            style={{ position: "relative", left: "85%", bottom: "50%" }}
            class="changepage11"
          >
            <a href="/">แก้ไข</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/"> ลบ</a>
          </div>
        </div>
        <div class="orderpage11">
          <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            สินค้า
            <hr />
          </p>

          {/* <p style="margin-left: 20px;">ชื่อ-นามสกุล &#58; </p>
            <p style="margin-left: 20px;">เบอร์โทรศัพท์ &#58; </p>
            <p style="margin-left: 20px;">ที่อยู่ &#58; </p>  */}

          <div class="changepage11">
            <i
              style={{ position: "relative", left: "95%", bottom: "50%" }}
              class="fas fa-trash-alt"
            ></i>
          </div>
        </div>

        <div class="couponpage11">
          <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            คูปอง
            <input
              style={{
                width: "100px",
                height: "30px",
                fontSize: "16px",
                backgroundColor: "#C4C4C4",
                border: "none",
                cursor: "pointer",
              }}
              type="submit"
              value="คูปองที่เลือก"
            />
          </p>
          <div class="submitpage11">
            <div id="textpage11">
              <p style={{ marginRight: "10px" }}>
                รวม(# สินค้า): #&nbsp;&#3647;
              </p>
              <p style={{ marginRight: "10px" }}>ส่วนลด: #&nbsp;&#3647;</p>
            </div>
            <form>
              <input
                style={{
                  cursor: "pointer",
                  margin: "20px",
                  width: "60px",
                  height: "30px",
                  fontSize: "16px",
                  backgroundColor: "#E8BCBC",
                  border: " none",
                }}
                type="submit"
                value="ยืนยัน"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSummary;
