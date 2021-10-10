import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { removeToken } from "../../server/localStorage";
import axios from "../../config/axios";
function Header() {
  const { user, setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleClickLogout = (e) => {
    e.preventDefault(); // a tag
    removeToken();
    setUser(null); // update sate
    history.push("/login");
  };

  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/profile/${user.id}`);
        const resUser = res.data.user;
        setGetUser(resUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <header className="header1">
        {user ? (
          <>
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
                  <NavLink className="btn " to="/profile">
                    {getUser.name}
                  </NavLink>
                  <NavLink className="btn " to="/" onClick={handleClickLogout}>
                    Logout
                  </NavLink>
                </li>
                <li>
                  <NavLink className="btn" to="/ordersummary">
                    <i class="bi bi-bag-fill"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
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
