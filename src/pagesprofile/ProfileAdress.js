import React from "react";

function ProfileAdress() {
  return (
    <>
      <section className="page14">
        <div className="profilepage13">
          <a style={{ width: "200px", border: "none" }} href="/profile">
            <i style={{ fontSize: "24px" }} className="far fa-user-circle"></i>
            &nbsp;ข้อมูลผู้ใช้
          </a>
          <a
            style={{ width: "200px", backgroundColor: "#e8bcbc" }}
            href="/profile-address"
          >
            แก้ไขที่อยุ่
          </a>
          <a style={{ width: "200px" }} href="/profile-orderstatus">
            <i className="far fa-edit"></i> ติดตามสถานนะสินค้า
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
          <a id="editaddress" href="/">
            + เพิ่มที่อยุ่ใหม่
          </a>
          <div className="address">
            <p id="textpage13">ชื่อ - นามสกุล :</p>
            <p id="textpage13">เบอร์โทรศัพท์ :</p>
            <p id="textpage13">ที่อยู่ :</p>
            <div
              style={{ position: "relative", left: "80%", bottom: "50%" }}
              className="changepage11"
            >
              <a href="/">แก้ไข</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/"> ลบ</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileAdress;
