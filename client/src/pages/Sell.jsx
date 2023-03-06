import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Sell = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="sell">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="sellorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
          ;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>List on the market</h1>
          <span>
            <b>Status</b> Draft
          </span>
          <span>
            <b>Visibility</b> Public
          </span>
          <span>
            <b>Price</b> <input className="price" type="text" placeholder="NZD "/>
          </span>
          <input className="input-file" type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="button">
            <button className="save"> Save as a draft</button>
            <button className="update"> Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="category" value="dolls" id="dolls" />
            <label htmlFor="dolls">Dolls and soft toys</label>{" "}
          </div>
          <div className="category">
            <input type="radio" name="category" value="animals" id="animals" />
            <label htmlFor="animals">Animal toys</label>{" "}
          </div>

          <div className="category">
            <input type="radio" name="category" value="cars" id="cars" />
            <label htmlFor="cars">Cars and trains</label>{" "}
          </div>

          <div className="category">
            <input type="radio" name="category" value="legos" id="legos" />
            <label htmlFor="legos">LEGOs</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
