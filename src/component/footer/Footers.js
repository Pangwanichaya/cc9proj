import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p style={{ margin: "10px" }}>Copyright &copy; 2021</p>
        <div class="iconfooter">
          <p style={{ margin: "10px" }}>ติดต่อเรา</p>

          <ul style={{ margin: "10px" }}>
            <li>
              <Link className="btn" to="/">
                <i class="bi bi-telephone"></i>
              </Link>
            </li>
            <li>
              <Link className="btn" to="/">
                <i class="bi bi-facebook"></i>
              </Link>
            </li>
            <li>
              <Link className="btn" to="/">
                <i class="bi bi-instagram"></i>
              </Link>
            </li>
            <li>
              <Link className="btn" to="/">
                <i class="fab fa-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
