import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

export default (props) => {
  const product = data.products.find(
    (x) => x._id === Number(props.match.params.id)
  );
  console.log(product);
  return (
    <div>
      <div class="back-to-result">
        <Link to="/">Back</Link>
      </div>
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
            <li>Status : {product.status}</li>
            <li>
              Qty:
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
