import React from "react";
import CouponItem from "../component/products/coupon/CouponItem";
import { coupons } from "../data/data";

function Coupon() {
  return (
    <section className="page7">
      {coupons.map((coupon) => (
        <CouponItem key={coupon.id} coupon={coupon} />
      ))}
    </section>
  );
}

export default Coupon;
