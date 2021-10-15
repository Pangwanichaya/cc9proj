import React, { useState } from "react";
import axios from "../config/axios";
import { useHistory } from "react-router-dom";

function AddProfileAddress() {
  const history = useHistory();
  const [newAddress, setNewAddress] = useState("");

  const handleUpdateAddress = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("address", newAddress);

      const res = await axios.post(`/profile`, formData);

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
