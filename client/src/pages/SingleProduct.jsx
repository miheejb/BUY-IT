import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="links">
            <div className="link">
              <a href="../">
                <h6>Home</h6>
              </a>
              <h6>Search</h6>
              <a href="../">
                <h6>Buy</h6>
              </a>
              <h6>Sellers</h6>
            </div>
          </div>
          <div className="navbarRight">
            <span className="loginregister">
              <h6>
                <a href="../login">Login/Register</a>
              </h6>
            </span>
            <span>Logout</span>
            <a href="../sell">
              <span className="sell"> Sell</span>{" "}
            </a>
          </div>
        </div>
        v
      </div>
      <div className="single">
        <div className="content">
          <img src="/images/lego/lego_city_rescue_helicopter.jpg" alt="" />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
            esse soluta tempore nostrum autem eum, saepe modi iusto recusandae
            atque quam, sint, nam hic repellendus a cumque id temporibus.
          </p>
          <div className="buyoption">
            <p className="price">Price: NZD 39.99</p>
            <button> ADD TO BAG </button>
          </div>
          <div className="user">
            <img src="/images/mihee.png" alt="" />
            <div className="info">
              <span>Mihee</span>
              <p>Listed 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src="/images/edit.png" alt="" />
              </Link>
              <img src="/images/delete.png" alt="" />
            </div>
          </div>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SingleProduct;
