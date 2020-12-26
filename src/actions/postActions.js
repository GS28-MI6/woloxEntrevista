import { ADD_FAVOURITES } from "./types";

export const updateFavourites = () => (dispatch) => {
  console.log("im in action")
  let auxStorage = JSON.parse(localStorage.getItem("favourites") || null);
  let count = 0;
  if (auxStorage) {
    console.log("im in action 2")
    count = auxStorage.length;
  }
  dispatch({
    type: ADD_FAVOURITES,
    payload: count,
  })
};
