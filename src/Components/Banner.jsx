import React from "react";
import "../Styles/Banner.css";
import { useStateValue } from "../ContextApi/stateProvider";
import { Avatar, Typography } from "@material-ui/core";

const Banner = () => {
  const [{ user, punjabi }] = useStateValue();

  console.log(punjabi);
  return (
    <div className="banner">
      <div className="banner__left">
        <Avatar
          className="banner__img"
          src={user?.images[0]?.url}
          alt="user_img"
          fontSize="large"
        />
      </div>

      <div className="banner__right">
        <strong>Playlist</strong>
        <Typography variant="h2"> {punjabi?.name} </Typography>
        <p>Top 101 Pubjabi Songs ♥🚀</p>
      </div>
    </div>
  );
};

export default Banner;
