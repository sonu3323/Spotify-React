import React from "react";
import "../Styles/Body.css";

import Header from "./Header";
import Banner from "./Banner";
import BodyMusic from "./BodyMusic";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <Banner />
      <BodyMusic />
    </div>
  );
};

export default Body;
