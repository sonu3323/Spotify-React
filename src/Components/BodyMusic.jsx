import React from "react";
import "../Styles/BodyMusic.css";
import { PlayCircleFilled, MoreHoriz, Favorite } from "@material-ui/icons";
import MusicColum from "./MusicColum";
import { useStateValue } from "../ContextApi/stateProvider";

const BodyMusic = () => {
  const [{ punjabi }] = useStateValue();

  return (
    <div className="bodymusic">
      <div className="bodymusic__icons">
        <PlayCircleFilled className="playicon" />
        <Favorite className="favourite" />
        <MoreHoriz fontSize="large" />
      </div>

      {punjabi?.tracks?.items?.map((song) => (
        <MusicColum
          songName={song?.track?.name}
          singer={song?.track?.artists[0]?.name}
          duration={song?.track?.duration_ms}
        />
      ))}
    </div>
  );
};

export default BodyMusic;
