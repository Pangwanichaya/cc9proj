import React from "react";

function Register() {
  return (
    <>
      <div class="textpage9">
        <p style={{ marginLeft: "40px" }}>สมัครสมาชิก</p>
        <p></p>
      </div>

      <section class="page9">
        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register1"
            placeholder="Username..."
          />
        </form>

        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register2"
            placeholder="Password..."
          />
        </form>

        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register3"
            placeholder="ชื่อ&nbsp;นามสกุล..."
          />
        </form>

        <form>
          <input
            style={{
              width: "600px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register4"
            placeholder="ที่อยู่..."
          />
        </form>

        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register5"
            placeholder="วัน/เดือน/ปีเกิด"
          />
        </form>

        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register6"
            placeholder="อีเมล์..."
          />
        </form>

        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid",
              margin: "20px 50px",
            }}
            type="text"
            name="register7"
            placeholder="เบอร์โทรศัพท์..."
          />
        </form>
        <div class="submitpage8">
          <form action="./index.html">
            <input
              style={{
                width: "60px",
                height: "30px",
                fontSize: "16px",
                backgroundColor: "#e8bcbc",
                border: "none",
              }}
              type="submit"
              value="ยืนยัน"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
