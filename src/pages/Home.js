import React from "react";
import { useContext } from "react";
import { AddContext } from "../context/addContext";

import { AuthContext } from "../context/authContext";

function Home() {
  const { product, onAdd } = useContext(AddContext);
  const { role } = useContext(AuthContext);
  return (
    <div>
      <section class="page1">
        {/* <div class="video">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/wAo5-i9bx3E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> */}

        <div className="icon_menu">
          <h1 style={{ fontSize: "24px" }}>
            <i
              style={{ color: "red", fontSize: "50px", margin: "10px" }}
              class="fab fa-hotjar"
            ></i>
            &nbsp;เมนูแนะนำสำหรับวันนี้
          </h1>
          <br />
          <div>
            <section className="page1">
              {product.map((item, idx) => {
                if (item.id === 1 || item.id === 2) {
                  return (
                    <div className="imgpage1" key={idx}>
                      {role === "USER" ? (
                        <a
                          style={{ textDecoration: "none", color: "inherit" }}
                          href="/pancake"
                        >
                          <img id="pic" src={item.picurl} alt="" />
                        </a>
                      ) : (
                        <img id="pic" src={item.picurl} alt="" />
                      )}
                      <div className="textpage2">
                        <p>{item.productname}</p>
                        <textarea disabled>{item.productdetail}</textarea>

                        <p>
                          {item.productprice} <span>฿</span>
                          {role === "USER" ? (
                            <button
                              onClick={() => onAdd(item)}
                              style={{
                                fontSize: "20px",
                                border: "none",
                                margin: "5px",
                              }}
                            >
                              <i className="bi bi-cart-plus-fill"></i>
                            </button>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
