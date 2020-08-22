export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlist: action.payload,
      };

    case "SET_PUNJABI":
      return {
        ...state,
        punjabi: action.payload,
      };

    default:
      return state;
  }
};
