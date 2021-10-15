import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../config/axios";

function EditProfileAddress() {
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
          <div className="address">
            <input type="text" id="textpage13">
              {getUser.name}
              {getUser.phone}
              {getUser.address}
            </input>

            <div
              style={{ position: "relative", left: "80%", bottom: "50%" }}
              className="changepage11"
            >
              <a href="/profile-address">SAVE</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfileAddress;
