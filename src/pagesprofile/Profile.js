import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../config/axios";
import { Link, useHistory } from "react-router-dom";

function Profile() {
  let { user } = useContext(AuthContext);
  const history = useHistory();
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

  const handleEditProfile = () => {
    history.push("/editprofile");
    // history.push({ pathname: `/CustomerProfileUpdate/${getUser.id}`, state: { getUser } });
  };

  return (
    <div>
      <section className="page13">
        <div className="profilepage13">
          <a
            style={{
              width: "300px",
              backgroundColor: "#e8bcbc",
              border: "none",
            }}
            href="/profile"
          >
            <i style={{ fontSize: "24px" }} className="far fa-user-circle"></i>
            &nbsp;ข้อมูลผู้ใช้
          </a>
          {/* <a style={{ width: "200px" }} href="/profile-address">
            แก้ไขที่อยุ่
          </a> */}
          <a style={{ width: "300px" }} href="/profile-orderstatus">
            <i className="far fa-edit"></i> ติดตามสถานนะสินค้า
          </a>
        </div>
      </section>
      <div
        style={{
          width: "600px",
          height: "700px",
          marginLeft: "350px",
          marginBottom: "80px",
        }}
        className="profile"
      >
        <p id="textpage13">ชื่อจริง - นามสกุล</p>
        <input id="inputpage13" type="text" value={getUser.name} />
        <p id="textpage13">วัน-เดือน-ปีเกิด</p>
        <input id="inputpage13" type="text" value={getUser.birthdate} />
        <p id="textpage13">Username</p>
        <input id="inputpage13" type="text" value={getUser.username} />
        <p id="textpage13">Password</p>
        <input id="inputpage13" type="password" />
        <p id="textpage13">อีเมล์</p>
        <input id="inputpage13" type="text" value={getUser.email} />
        <p id="textpage13">เบอร์โทรศัพท์</p>
        <input id="inputpage13" type="text" value={getUser.phone} />
        <p id="textpage13">ที่อยู่</p>
        <input id="inputpage13" type="text" value={getUser.address} />
        <Link
          to={{ pathname: `/editprofile/${getUser.id}`, state: getUser }}
          onClick={handleEditProfile}
        >
          <i
            style={{
              color: "red",
              fontSize: "40px",
              marginLeft: "18rem",
            }}
            className="bi bi-gear"
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
