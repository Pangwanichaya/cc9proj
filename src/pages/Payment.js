import React from "react";

function Payment() {
  return (
    <>
      <div class="textpage4">
        <p
          style={{
            position: "relative",
            left: "10px",
            fontSize: " 21px",
            margin: 0,
          }}
        >
          ข้อมูลชำระเงิน
        </p>
      </div>
      <section class="page12">
        <div class="paymentpage12">
          <p>กสิกร (KBANK)</p>
          <p>ชื่อบัญชี : xxxxxxxxxx</p>
          <p>เลขที่บัญชี : xxxxxxxxxx</p>

          <form>
            <input type="file" className="form-control" />
          </form>
        </div>
      </section>
      <div class="submitpage12">
        <form>
          <input
            style={{
              width: "60px",
              height: "30px",
              fontSize: "16px",
              backgroundColor: "#e8bcbc",
              border: "none",
            }}
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default Payment;
