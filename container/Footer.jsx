import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 headset shopme all rights reserved </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
