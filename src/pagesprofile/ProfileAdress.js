import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../config/axios";

function ProfileAdress() {
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
            <p id="textpage13">{getUser.name}</p>
            <p id="textpage13">{getUser.phone}</p>
            <p id="textpage13">{getUser.address}</p>
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
