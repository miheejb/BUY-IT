import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SingleProduct = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="/images/legocity.jpeg" alt="" />
        <h1>Lorem ipsum dolor sit amet.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima esse soluta tempore nostrum autem eum, saepe modi iusto recusandae atque quam, sint, nam hic repellendus a cumque id temporibus.</p>
        <div className="buyoption">
        <p className="price">Price: NZD 30</p>
        <button> ADD TO BAG </button></div>
        <div className="user">
          <img src="/images/mihee.png" alt="" />
          <div className="info">
            <span>Mihee</span>
            <p>Listed 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src="/images/edit.png" alt="" /></Link>
            <img src="/images/delete.png" alt="" />
          </div>
        </div>
      </div>
      <div className="menu"><Menu/></div>
    </div>
  );
};

export default SingleProduct;
