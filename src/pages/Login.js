import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "../config/axios";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../context/authContext";
import { setToken } from "../server/localStorage";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {
        username,
        password,
      });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push("/");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        props.setError("Invalid username or password");
      }
    }
  };

  return (
    <>
      <div className="page10">
        <img
          style={{
            margin: "0 100px",
            width: "300px",
            height: "250px",
            position: "relative",
            top: "60px",
          }}
          src="../pic/1.jpg"
          alt=""
        />
        <div className="loginpage10">
          <p id="textpage10">เข้าสู่ระบบ</p>
          <form onSubmit={handleSubmitLogin}>
            <div className="login">
              <input
                type="text"
                className="usernamepage10"
                placeholder="Username"
                autofocus="1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="passwordpage10"
                name="loginusername"
                id="password"
                placeholder="Password"
                autofocus="1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="submitpage10">
              <button
                style={{
                  width: "80px",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "#E8BCBC",
                  border: "none",
                }}
                type="submit"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
          <div id="notuse">
            <p>
              ยังไม่มีบัญชีผู้ใช้งาน &nbsp;&#63;&nbsp;&nbsp;
              <a href="/register">
                <ins>สมัครเพื่อใช้งาน</ins>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
