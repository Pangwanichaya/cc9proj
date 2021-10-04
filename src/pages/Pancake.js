import React from "react";
import { Link } from "react-router-dom";

function Pancake() {
  return (
    <div>
      <div class="textpage3">
        <Link to="/toppingpancake">
          <i class="bi bi-bag-plus" style={{ fontSize: "28px" }}></i>
          &nbsp;เลือก&nbsp;ท็อปปิ้งด้วยตัวเอง
        </Link>
      </div>
      <section className="page3">
        <div className="imgpage2">
          <img src="./pic/pancake/วิปปิ้งครีมสตอเบอร์รี่ (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>แพนเค้กวิปปิ้งครีมสตอเบอร์รี่</p>
            <p>
              89 &#3647; &nbsp;
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pancake;
