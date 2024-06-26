import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeSelectedProduct, selectedProduct } from "../redux/actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    if (productId && productId !== "") {
      //  axios
      //   .get("https://fakestoreapi.com/products/" + productId)
      //   .then((res) => {
      //     dispatch(selectedProduct(res.data));
      //   })
      //   .catch((err) => {
      //     console.log("err", err);
      //   });
      dispatch(fetchProduct(productId))
    }
    return ()=>{
      dispatch(removeSelectedProduct())
    }
  }, [productId]);
  return (
      <div className="ui grid container" style={{paddingTop:100}} >
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={product.image} />
                </div>
                <div className="column rp">
                  <h1>{product.title}</h1>
                  <h2>
                    <a className="ui teal tag label">${product.price}</a>
                  </h2>
                  <h3 className="ui brown block header">{product.category}</h3>
                  <p>{product.description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};
export default ProductDetails;
