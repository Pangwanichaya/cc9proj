import React from "react";
import { Link } from "react-router-dom";

function Promotion() {
  return (
    <>
      <div class="textpage4">
        <h3>เมนูพิเศษประจำวันนี้&nbsp;&#33;&#33;</h3>
      </div>
      <section class="page6">
        <div class="imgpage2">
          <div class="imgpage2">
            <img
              src="./pic/pomotion/food4lasagne-veg (Custom)pomotion.jpg"
              alt=""
            />
            <div class="textpage2">
              <p>lasagne&nbsp;veg</p>
              <p>
                75 &#3647; &nbsp; &nbsp;
                <del style={{ color: "red" }}>89&#3647; </del>
                <Link to="/" style={{ fontSize: "28px" }}>
                  <i class="bi bi-bag-plus-fill"></i>
                </Link>
              </p>
            </div>
          </div>
          {/* <div class="imgpage2">
            <img
              src="./pic/pomotion/วิปปิ้งครีมสตอเบอร์รี่ (Custom)pomotion (Custom).jpg"
              alt=""
            />
            <div class="textpage2">
              <p>แพนเค้กวิปปิ้งครีมสตอเบอร์รี่</p>
              <p>
                75 &#3647; &nbsp; &nbsp;<del style="color: red;">89&#3647;</del>{" "}
                <a
                  style="font-size: 28px;"
                  href="#"
                  class="fas fa-cart-plus"
                ></a>
              </p>
            </div>
          </div>
          <div class="imgpage2">
            <img
              src="./pic/pomotion/ชาเขียวเย็น (Custom) (Custom).jpg"
              alt=""
            />
            <div class="textpage2">
              <p>ชาเขียวเย็น</p>
              <p>
                59 &#3647; &nbsp; &nbsp;<del style="color: red;">79&#3647;</del>{" "}
                <a
                  style="font-size: 28px;"
                  href="#"
                  class="fas fa-cart-plus"
                ></a>
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Promotion;
