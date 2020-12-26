import { ADD_FAVOURITES } from '../actions/types';

const initialState = {
  favourites: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}