import React from "react";

function ThxFeedback() {
  return (
    <>
      <div class="textpage4">
        <p style={{ position: "relative", left: "50px", fontSize: "24px" }}>
          ขอบคุณที่ให้ข้อเสนอแนะคะ
        </p>
        <p style={{ position: "relative", left: "50px" }}>
          เรายินดีที่จะพิจารณา เพื่อปรับปรุงให้ตรงตาม ข้อเสนอแนะ
          <br />
          ที่คุณลูกค้าได้เสนอมา
        </p>
      </div>

      <div class="submitpage8">
        <form action="/">
          <input
            style={{
              width: "140px",
              height: "50px",
              fontSize: "18px",
              backgroundColor: "#e8bcbc",
              border: "none",
            }}
            type="submit"
            value="กลับไปหน้าแรก"
          />
        </form>
      </div>
    </>
  );
}

export default ThxFeedback;
