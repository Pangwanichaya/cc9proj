import { useState } from "react";

import axios from "../config/axios";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function EditProfileAddress() {
  const location = useLocation();
  const history = useHistory();
  // const [id, setId] = useState(location.state.id);
  const [address, setAddress] = useState(location.state.address);

  const handleSubmitUpdateProfile = async (e) => {
    e.preventDefault();
    axios
      .put(`/profile/${location.state.id}`, { address })
      .then(() => {
        history.push({
          pathname: "/profile-address",
          state: {
            successMessage:
              "Your account has been created. Profileaddress to continue.",
          },
        });
      })
      .catch((err) => {
        // if (err.response && err.response.status === 400) {
        //   props.setError(err.response.data.message);
        // }
      });

    // Swal.fire({
    //   title: "Success",
    //   text: "Do you want to continue",
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });
  };

  return (
    <>
      <section className="page14">
        <div className="profilepage13">
          <a style={{ width: "200px", border: "none" }} href="/profile">
            <i style={{ fontSize: "24px" }} className="far fa-user-circle"></i>
            &nbsp;ข้อมูลผู้ใช้
          </a>
          <a
            style={{ width: "200px", backgroundColor: "#e8bcbc" }}
            href="/profile-address"
          >
            แก้ไขที่อยุ่
          </a>
          <a style={{ width: "200px" }} href="/profile-orderstatus">
            <i className="far fa-edit"></i> ติดตามสถานนะสินค้า
          </a>
        </div>

        <div
          style={{
            width: "600px",
            height: "500px",
            marginLeft: "350px",
            marginBottom: "80px",
          }}
          className="profile"
        >
          <div className="address">
            <form onSubmit={handleSubmitUpdateProfile}>
              <input
                type="text"
                id="textpage13"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>

              <div
                style={{ position: "relative", left: "80%", bottom: "50%" }}
                className="changepage11"
              >
                <button type="submit">SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfileAddress;
