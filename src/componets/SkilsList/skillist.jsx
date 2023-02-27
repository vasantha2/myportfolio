import React from "react";
import { myskils } from "../../datas";
import Skil from "../Skills/skil";
import "./skillist.css";

const skillist = () => {
  return (
    <div className="sl">
      <div className="sl-texts">
        <h1 className="sl-title">My Skils</h1>
      </div>
      <div className="sl-list">
        {myskils.map((item) => (
          <Skil key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default skillist;
