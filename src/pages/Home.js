import React from "react";

function Home() {
  return (
    <div>
      <section class="page1">
        <div class="video">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/wAo5-i9bx3E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="icon_menu">
          <h1 style={{ fontSize: "24px" }}>
            <i
              style={{ color: "red", fontSize: "50px", margin: "10px" }}
              class="fab fa-hotjar"
            ></i>
            &nbsp;เมนูแนะนำสำหรับวันนี้
          </h1>
          <br />
          <img id="imgpage_1" src="./pic/food9Khao Pad (Custom).jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
