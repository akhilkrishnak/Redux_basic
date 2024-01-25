import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/index";

const ProductListing = () => {
  const dispatch = useDispatch(); //dispatch an action to set products (using data from api)
  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     dispatch(setProducts(res.data));      // will go to action and there return the object and that object will be taken by the reducer
    //   })
    //   .catch((err) => {
    //     console.log("Err", err);
    //   });
    dispatch(fetchProducts())
  }, []);
  return (
    <div className="ui grid container" style={{paddingTop:100}}>
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
