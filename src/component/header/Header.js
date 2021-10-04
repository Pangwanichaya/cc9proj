import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header1">
        <div className="navstart">
          <ul>
            <li>
              <Link className="btn" to="/">
                PancakeCafe
              </Link>
            </li>
            <li>
              <NavLink className="btn" to="/">
                หน้าแรก
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/food">
                อาหาร
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/pancake">
                แพนเค้ก
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/drink">
                เครื่องดื่ม
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/promotion">
                โปรโมชั่น
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/coupon">
                คูปอง
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/feedback">
                ข้อเสนอแนะ
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navright">
          <ul>
            <li>
              <NavLink className="btn " to="/register">
                ลงทะเบียน&nbsp;
              </NavLink>
              /
              <NavLink className="btn" to="/login">
                &nbsp;เข้าสู่ระบบ
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/ordersummary">
                <i class="bi bi-bag-fill"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <header class="header2">
        <div id="navleft">
          <ul>
            <Link className="btn" to="/">
              <i className="fas fa-bars"></i>
            </Link>
          </ul>
        </div>
        <div id="navcenter">
          <ul>
            <Link className="btn" to="/">
              PancakeCafe
            </Link>
          </ul>
        </div>
        <div id="navright">
          <ul>
            <li>
              <Link className="btn" to="/register">
                ลงทะเบียน&nbsp;
              </Link>
              /
              <Link className="btn" to="/login">
                &nbsp;เข้าสู่ระบบ
              </Link>
            </li>
            <Link className="btn" to="/">
              <i className="fas fa-bars"></i>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
