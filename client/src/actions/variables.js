import axios from "axios";
import { localURL, GET_VARIABLE } from "../constants";

export const getVariable = varName => async dispatch => {
  try {
    const res = await axios.get(`${localURL}/${varName}`);
    dispatch({
      type: GET_VARIABLE,
      payload: res.data
    });
  } catch (error) {
    console.error(error.message);
  }
};
