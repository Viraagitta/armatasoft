import { legacy_createStore as createStore, applyMiddleware } from "redux";
// const { createStore } = require("redux");
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
