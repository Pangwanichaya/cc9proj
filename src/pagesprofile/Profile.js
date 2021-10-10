import React, { useState, useEffect } from "react";
import { user as initailUser } from "../server/localStorage";
import axios from "../config/axios";

function Profile() {
  // const result = user;
  // console.log(result);
  const [user, setUser] = useState(initailUser);
  useEffect(() => {
    const profile = async (id) => {
      try {
        const res = await axios.get(`/profile/${id}`);
        const user = res.data.users;
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    profile();
  }, []);
  console.log(user);

  return (
    <div>
      <section className="page13">
        <div className="profilepage13">
          <a
            style={{
              width: "200px",
              backgroundColor: "#e8bcbc",
              border: "none",
            }}
            href="/profile"
          >
            <i style={{ fontSize: "24px" }} className="far fa-user-circle"></i>
            &nbsp;ข้อมูลผู้ใช้
          </a>
          <a style={{ width: "200px" }} href="/profile-address">
            แก้ไขที่อยุ่
          </a>
          <a style={{ width: "200px" }} href="/profile-orderstatus">
            <i className="far fa-edit"></i> ติดตามสถานนะสินค้า
          </a>
        </div>
      </section>
      <div
        style={{
          width: "600px",
          height: "500px",
          marginLeft: "350px",
          marginBottom: "80px",
        }}
        className="profile"
      >
        <p id="textpage13">ชื่อจริง - นามสกุล</p>
        <input id="inputpage13" type="text" name="profilename" />
        <p id="textpage13">วัน-เดือน-ปีเกิด</p>
        <input id="inputpage13" type="text" name="profilename" />
        <p id="textpage13">Username</p>
        <input id="inputpage13" type="text" name="profilename" />
        <p id="textpage13">Password</p>
        <input id="inputpage13" type="text" name="profilename" />
        <p id="textpage13">อีเมล์</p>
        <input id="inputpage13" type="text" name="profilename" />
        <p id="textpage13">เบอร์โทรศัพท์</p>
        <input id="inputpage13" type="text" name="profilename" />
      </div>
    </div>
  );
}

export default Profile;
