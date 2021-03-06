import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : error ? (
    <h3>{error}</h3>
  ) : (
    <ul className="products">
      <button>
        <Link to="/products">Upload Product</Link>
      </button>
      {products.map((product) => {
        return (
          <li key={product._id}>
            <div className="product">
              <img
                className="product-image"
                src={product.imageSrc}
                alt="Item1"
              />
              <div className="product-name">
                <Link to={`/product/${product._id}`}> {product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">Rs-{product.price}</div>
              <div className="product-rating">
                {product.rating} stars ({product.numReviews} reviews)
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default HomeScreen;
