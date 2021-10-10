import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../config/axios";

function Profile() {
  let { user } = useContext(AuthContext);

  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/profile/${user.id}`);
        const resUser = res.data.user;
        setGetUser(resUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

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
        <p id="textpage13">{getUser.name}</p>
        <p id="textpage13">วัน-เดือน-ปีเกิด</p>
        <p id="textpage13">{getUser.birthdate}</p>
        <p id="textpage13">Username</p>
        <p id="textpage13">{getUser.username}</p>

        <p id="textpage13">Password</p>
        <p id="textpage13">{getUser.password}</p>

        <p id="textpage13">อีเมล์</p>
        <p id="textpage13">{getUser.email}</p>

        <p id="textpage13">เบอร์โทรศัพท์</p>
        <p id="textpage13">{getUser.phone}</p>
      </div>
    </div>
  );
}

export default Profile;
