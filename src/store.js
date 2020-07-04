import appReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    appReducer, composeWithDevTools()
);

export default store;