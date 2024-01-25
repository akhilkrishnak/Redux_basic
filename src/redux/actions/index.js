import { ActionTypes } from "../constants/action-types";
import fetchProductApi from "../../apis/fetchProductApi";

function fetchProducts() {
  return async function (dispatch) {
    const response = await fetchProductApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
}

function fetchProduct(id) {
  return async function (dispatch) {
    const response = await fetchProductApi.get("/products/" + id);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };
}
function setProducts(products) {
  return {
    // action always return a plain javascript objext
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}
function selectedProduct(product) {
  return {
    // action always return a plain javascript objext
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}
function removeSelectedProduct() {
  return {
    // action always return a plain javascript objext
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}
export {
  setProducts,
  selectedProduct,
  removeSelectedProduct,
  fetchProducts,
  fetchProduct,
};
