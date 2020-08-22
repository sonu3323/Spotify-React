import React from "react";
import { PlayCircleFilled, MoreHoriz, MusicNote } from "@material-ui/icons";

const MusicColum = ({ singer, songName, duration }) => {
  const millisToMin = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bodymusic__body">
      <MusicNote />

      <div className="bodymusic__songname">
        <strong>{songName}</strong>
        <p> {singer} </p>
      </div>
      {}
      <p>{millisToMin(duration)}</p>
    </div>
  );
};

export default MusicColum;
