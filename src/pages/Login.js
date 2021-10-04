import React from "react";

function Login() {
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
          src="./pic/1.jpg"
          alt=""
        />
        <div class="loginpage10">
          <p id="textpage10">เข้าสู่ระบบ</p>
          <div class="login">
            <input
              type="text"
              class="usernamepage10"
              name="username"
              id="username"
              data-testid="royal_email"
              placeholder="Username"
              autofocus="1"
              aria-label="Password"
            />
            <input
              type="password"
              class="passwordpage10"
              name="loginusername"
              id="password"
              data-testid="royal_email"
              placeholder="Password"
              autofocus="1"
              aria-label="Password"
            />
          </div>

          <div class="submitpage10">
            <form action="">
              <input
                style={{
                  width: "80px",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "#E8BCBC",
                  border: "none",
                }}
                type="submit"
                value="เช้าสู่ระบบ"
              />
            </form>
          </div>
        </div>
        <div id="notuse">
          <p>
            ยังไม่มีบัญชีผู้ใช้งาน &nbsp;&#63;&nbsp;&nbsp;
            <a href="./register.html">
              <ins>สมัครเพื่อใช้งาน</ins>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
