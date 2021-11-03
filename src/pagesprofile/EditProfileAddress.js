import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../config/axios";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function EditProfileAddress() {
  const location = useLocation();
  const history = useHistory();
  let { user } = useContext(AuthContext);
  const [getUser, setGetUser] = useState([]);
  const [name, setName] = useState(location.state.name);
  const [address, setAddress] = useState(location.state.address);
  const [username, setUsername] = useState(location.state.username);
  const [password, setPassword] = useState(location.state.password);
  const [email, setEmail] = useState(location.state.email);
  const [birthdate, setBirthdate] = useState(location.state.birthdate);
  const [phone, setPhone] = useState(location.state.phone);

  console.log(location.state.getUser);

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

  const handleSubmitUpdateProfile = async (e) => {
    e.preventDefault();
    axios
      .put(`/profile/${getUser.id}`, {
        name,
        username,
        address,
        birthdate,
        email,
        phone,
        password,
      })
      .then(() => {
        history.push({
          pathname: "/profile",
          state: {
            successMessage:
              "Your account has been created. Profileaddress to continue.",
          },
        });
      })
      .catch((err) => {
        // if (err.response && err.response.status === 400) {
        //   props.setError(err.response.data.message);
        // }
      });

    // Swal.fire({
    //   title: "Success",
    //   text: "Do you want to continue",
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });
  };

  return (
    <>
      <div
        style={{
          width: "600px",
          height: "800px",
          marginLeft: "350px",
          marginBottom: "80px",
        }}
      >
        <div className="address">
          <form onSubmit={handleSubmitUpdateProfile}>
            <div
              style={{
                width: "600px",
                height: "700px",
              }}
              className="profile"
            >
              <p id="textpage13">ชื่อจริง - นามสกุล</p>
              <input
                id="inputpage13"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p id="textpage13">วัน-เดือน-ปีเกิด</p>
              <input
                id="inputpage13"
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <p id="textpage13">Username</p>
              <input
                id="inputpage13"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p id="textpage13">Password</p>
              <input
                id="inputpage13"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p id="textpage13">อีเมล์</p>
              <input
                id="inputpage13"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p id="textpage13">เบอร์โทรศัพท์</p>
              <input
                id="inputpage13"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p id="textpage13">ที่อยู่</p>
              <input
                id="inputpage13"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                style={{ marginLeft: "18rem", padding: "0.5rem" }}
                type="submit"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfileAddress;
