import React from "react";
import "../Styles/Sidebar.css";
import SideBarOption from "./SideBarOption";
import { Home, Search, LibraryMusicOutlined } from "@material-ui/icons";
import { useStateValue } from "../ContextApi/stateProvider";

const SideBar = () => {
  const [{ playlist }] = useStateValue();

  console.log(playlist);

  return (
    <div className="sidebar">
      <img
        className="sidebar__img"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify_logo"
      />
      <div className="sidebar__sidebaroption">
        <SideBarOption title="Home" Icon={Home} />
        <SideBarOption title="Search" Icon={Search} />
        <SideBarOption title="Your Library" Icon={LibraryMusicOutlined} />

        <strong className="playlist">Playlists</strong>
        <hr className="hr" />

        {playlist?.items?.map((playlist) => (
          <SideBarOption title={playlist.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
