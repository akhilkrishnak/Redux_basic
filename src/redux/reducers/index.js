import { ActionTypes } from "../constants/action-types";
import { combineReducers } from "redux";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  // always take 2 parameters state and action
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
const selectedProductReducer = (state = {}, { type, payload }) => {
  // action is destructured directly (same meaning as before)
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
}); //combinereducer takes the object

export default reducers;
