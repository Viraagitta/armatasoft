import { DATA_FETCH_SUCCESS } from "./actionType";
import axios from "axios";

export const fetchDataSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};
export const getAllData = (data) => {
  return async (dispatch, getState) => {
    const data = await fetch(data)
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((err) => console.log(err));
  };
};
