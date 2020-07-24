import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import axios from "axios";

function HomeScreen(props) {
  const [product, setProduct] = useState([]);

  return (
    <ul class="products">
      {data.products.map((product) => {
        return (
          <li>
            <div class="product">
              <img class="product-image" src={product.imageSrc} alt="Item1" />
              <div class="product-name">
                <Link to={`/product/${product._id}`}> {product.name}</Link>
              </div>
              <div class="product-brand">{product.brand}</div>
              <div class="product-price">Rs-{product.price}</div>
              <div class="product-rating">
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
