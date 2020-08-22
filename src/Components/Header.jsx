import React from "react";
import "../Styles/Header.css";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useStateValue } from "../ContextApi/stateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  console.log(user);

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for Song Artist Playlist" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="sonu" />
        <h3>{user?.display_name}</h3>
      </div>
    </div>
  );
};

export default Header;
