import React from "react";
import { Link } from "react-router-dom";

function Food() {
  return (
    <div>
      <section class="page2">
        <div class="imgpage2">
          <img src="./pic/food4lasagne-veg (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>lasagne&nbsp;veg</p>
            <p>
              89 &#3647; &nbsp;
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food2Yakhni (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Yakhni</p>
            <p>
              89 &#3647; &nbsp;{" "}
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food3Lentil Koftas (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Lentil&nbsp;Koftas</p>
            <p>
              89 &#3647; &nbsp;{" "}
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food9Khao Pad (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Khao&nbsp;Pad</p>
            <p>
              89 &#3647; &nbsp;{" "}
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food6Tom Kha Ga (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Tom&nbsp;Kha&nbsp;Ga</p>
            <p>
              89 &#3647; &nbsp;{" "}
              <Link to="/" style={{ fontSize: "28px" }}>
                <i class="bi bi-bag-plus-fill"></i>
              </Link>
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food7Pad See Eiw (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Pad&nbsp;See&nbsp;Eiw</p>
            <p>
              89 &#3647; &nbsp;{" "}
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

export default Food;
