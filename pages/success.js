import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/stateContext";
import Link from "next/link";
import { runSchoolPride } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSchoolPride();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase</h2>
        <p className="email-msg">Check your email for your receipt</p>
        <p className="description">
          if you have a question just email
          <a className="email" href="mailto:wilsonibekason@gmail.com">
            wilsonibekason@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="100%" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
