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
          <ReactQuill theme="snow" value={value} onChange={setValue}/>;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>List on the market</h1>
          <span>
            <b>Status</b>
          </span>
        </div>
        <div className="item">i2</div>
      </div>
    </div>
  );
};

export default Sell;
