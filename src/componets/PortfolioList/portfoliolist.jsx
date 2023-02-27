import React from "react";
import "./portfoliolist.css";
import Portfolio from "../Portfolio/portfolio";
import { portfolios } from "../../data";

const portfoliolist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My PortFolio</h1>
      </div>
      <div className="pl-list">
        {portfolios.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default portfoliolist;
