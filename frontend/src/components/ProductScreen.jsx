import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

export default (props) => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back</Link>
      </div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={product.imageSrc} alt={product.name} />
            </div>

            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <h5>
                    {product.rating} stars ({product.numReviews} reviews)
                  </h5>
                </li>
                <li>
                  <em>{product.price}</em>
                </li>
                <li>
                  <h6>{product.desc}</h6>
                </li>
              </ul>
            </div>

            <div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status :{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </li>
                <li>
                  Qty:
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 ? (
                    <button onClick={handleAddToCart} className="button">
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      style={{ pointerEvents: "none" }}
                      onClick={handleAddToCart}
                      className="button"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
