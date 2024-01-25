import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);  // to access the product store
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <div className="four wide column" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="content">
                    <div className="header">{product.title}</div>
                    <div className="meta price">$ {product.price}</div>
                    <div className="meta">{product.category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default ProductComponent;
