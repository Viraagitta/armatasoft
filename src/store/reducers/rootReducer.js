import { DATA_FETCH_SUCCESS } from "../actions/actionType";
// let data = require("../../soal test");
import data from "../../soal test";

const initialState = { data };
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
