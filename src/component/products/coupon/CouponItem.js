import React from "react";

function CouponItem({ coupon }) {
  return (
    <div className="imgpage2">
      <img src={coupon.image} alt="" />
      <div class="textpage2">
        <p>{coupon.name}</p>
        <button>ยืนยัน</button>
      </div>
    </div>
  );
}

export default CouponItem;
