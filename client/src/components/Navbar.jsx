import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="links">
          <div className="link">
            <h6>Home</h6>
            <h6>Search</h6>
            <h6>Buy</h6>
            <h6>Sellers</h6>
          </div>
        </div>
        <div className="navbarRight">
          <span className="loginregister">
            <h6>
              <a href="./login">Login/Register</a>
            </h6>
          </span>
          <span>Logout</span>
          <span className="sell">Sell</span>
        </div>
      </div>
      v
    </div>
  );
};

export default Navbar;
