import { GET_VARIABLE } from "../constants";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VARIABLE:
      return payload;
    default:
      return state;
  }
}
