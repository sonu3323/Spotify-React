import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenfromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./ContextApi/stateProvider";
import Player from "./Components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  // const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        payload: _token,
      });

      spotify.setAccessToken(_token);

      //User Details
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });

      // Playlists form userAccount
      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists =>", playlists.body);
        dispatch({
          type: "SET_PLAYLISTS",
          payload: playlists,
        });
      });

      spotify.getPlaylist("4RjNmCutmdkVbwgbyUP4fa").then((playlist) => {
        dispatch({
          type: "SET_PUNJABI",
          payload: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
