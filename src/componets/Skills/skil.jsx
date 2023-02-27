import React from "react";
import "./skil.css";

const skil = ({ img }) => {
  return (
    <div className="s">
      <div className="s-browser">
        <div className="s-circle"></div>
        <div className="s-circle"></div>
        <div className="s-circle"></div>
      </div>
      <a href="" target="_blank" rel="noreferrer">
        <img src={img} alt="" className="s-img" />
      </a>
    </div>
  );
};

export default skil;
