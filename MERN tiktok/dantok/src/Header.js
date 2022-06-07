import React from "react";
import "./Header.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__logo">
      <img className="logo" src={logo} alt="logo" />
      <h2 className="text">DanTok</h2>
    </div>
  );
}

export default Header;
