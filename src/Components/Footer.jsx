import React from "react";
import "../Styles/Footer.css";
import {
  Shuffle,
  SkipPrevious,
  PlayCircleOutline,
  Repeat,
  SkipNext,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__img"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/eclipse-mixtape-cover-music-cd-design-template-b6bf8293632bce2ad98c1c4ab6752e1d_screen.jpg?ts=1571589565"
          alt="album_cover"
        />
        <div className="footer__songInfo">
          <p>Teeje week</p>
          <p>Jordan Sandhu</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious footer__icon className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
