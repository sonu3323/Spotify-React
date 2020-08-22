export const authPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = process.env.REACT_APP_KEY;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenfromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((inital, item) => {
      var parts = item.split("=");
      inital[parts[0]] = decodeURIComponent(parts[1]);

      return inital;
    }, {});
};

export const loginUrl = `${authPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
