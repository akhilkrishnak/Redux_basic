import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk)); // it takes couple of arguments:- 1)reducers 2) state
export default store;
