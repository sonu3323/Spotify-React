import React from "react";
import "../Styles/Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  console.log("Spotify Object =>", spotify);
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;

// 1. Sidebar
// 2. Body
// 3.Footer
