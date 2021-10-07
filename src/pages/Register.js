import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../config/axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const history = useHistory();

  const handleSubmitRegister = (e, props) => {
    e.preventDefault();
    axios
      .post("/register", {
        username,
        password,
        name,
        address,
        birthdate,
        email,
        phone,
      })
      .then(() => {
        history.push({
          pathname: "/login",
          state: {
            successMessage:
              "Your account has benn created. Please log in to continue",
          },
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          props.setError(err.response.data.message);
        }
      });
  };

  return (
    <>
      <div class="textpage9">
        <p style={{ marginLeft: "40px" }}>สมัครสมาชิก</p>
        <p></p>
      </div>

      <section class="page9">
        <form onSubmit={handleSubmitRegister}>
          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register1"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="password"
            name="register2"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register3"
            placeholder="ชื่อ&nbsp;นามสกุล..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "600px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register4"
            placeholder="ที่อยู่..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="date"
            name="register5"
            placeholder="วัน/เดือน/ปีเกิด"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register6"
            placeholder="อีเมล์..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register7"
            placeholder="เบอร์โทรศัพท์..."
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />

          <div class="submitpage8">
            <button
              style={{
                width: "60px",
                height: "30px",
                fontSize: "16px",
                backgroundColor: "#e8bcbc",
                border: "none",
              }}
              type="submit"
            >
              ยืนยัน
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
