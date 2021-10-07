import React from "react";

function ProfileOrderStatus() {
  return (
    <>
      <section class="page15">
        <div class="profilepage13">
          <a style={{ width: "200px", border: "none" }} href="/profile">
            <i style={{ fontSize: "24px" }} class="far fa-user-circle"></i>
            &nbsp;ข้อมูลผู้ใช้
          </a>
          <a style={{ width: "200px" }} href="/profile-address">
            แก้ไขที่อยุ่
          </a>
          <a
            style={{ width: "200px", backgroundColor: "#E8BCBC" }}
            href="profile-orderstatus"
          >
            <i class="far fa-edit"></i> ติดตามสถานนะสินค้า
          </a>
        </div>
        <div
          style={{
            width: "600px",
            height: "500px",
            marginLeft: "350px",
            marginBottom: "80px",
          }}
          className="profile"
        >
          <p style={{ margin: "20px" }}>รายการสินค้า</p>
          <div className="address">
            <p id="textpage13">.....</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileOrderStatus;
