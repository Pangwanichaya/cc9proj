import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { GUEST, ADMIN, USER } from "./MenuList";
import { AuthContext } from "../../context/authContext";
import { removeToken } from "../../server/localStorage";
import axios from "../../config/axios";
import Swal from "sweetalert2";
function Header() {
  const { user, setUser } = useContext(AuthContext);
  const historyCart = useHistory();
  const history = useHistory();

  const handleClickLogout = (e, title) => {
    // console.log(`e`, e);
    // console.log(`title`, title);
    if (title === "Logout") {
      e.preventDefault(); // a tag

      Swal.fire({
        title: "ต้องการออกจากระบบหรือไม่",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/");
          removeToken();
          setUser(null); // update sate
        }
      });
    }
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

  const handleClickCart = () => {
    historyCart.push("/CustomerCart");
  };

  const { role } = useContext(AuthContext);
  const menuList =
    role === "GUEST"
      ? GUEST.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink
                exact
                to={to}
                activeClassName="active"
                style={{ color: "inherit" }}
              >
                {title}
              </NavLink>
            </li>
          );
        })
      : role === "ADMIN"
      ? ADMIN.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink
                exact
                to={to}
                activeClassName="active"
                className="btn "
                onClick={(e) => handleClickLogout(e, title)}
              >
                {title}
              </NavLink>
            </li>
          );
        })
      : USER.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink
                exact
                to={to}
                activeClassName="active"
                className="btn "
                onClick={(e) => handleClickLogout(e, title)}
              >
                {title}
              </NavLink>
            </li>
          );
        });

  return (
    <div className="headerwidth">
      <header className="header1">
        <Link
          to={`${role === "GUEST" ? "/" : role === "USER" ? "/" : "/admin3"}`}
          style={{ color: "inherit" }}
        >
          Pancake<font>Cafe</font>
        </Link>

        <ul>{menuList}</ul>

        {role === "USER" && (
          <NavLink className="btn" to="/ordersummary">
            <i class="bi bi-bag-fill"></i>
          </NavLink>
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
