import React, { useState, useContext } from "react";
import axios from "../config/axios";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function AddProfileAddress() {
  let { user } = useContext(AuthContext);
  const history = useHistory();
  const loaction = useLocation();
  const [newAddress, setNewAddress] = useState("");

  const handleUpdateAddress = async (e) => {
    try {
      e.preventDefault();
      axios.post(`/profile/${user.id}`);

      // console.log(res.data);

      history.push("/profile-address");
      window.location.reload();
    } catch (err) {
      console.log(err);
      // setErrorAddForm({ ...err, errBack: err.response.data.message });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleUpdateAddress}>
        <input
          type="text"
          style={{ width: "500px", height: "200px" }}
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        ></input>
        <button
          style={{
            display: "flex",
            justifyContent: "center",

            margin: "30%",
          }}
        >
          SAVE
        </button>
      </form>
    </div>
  );
}

export default AddProfileAddress;
