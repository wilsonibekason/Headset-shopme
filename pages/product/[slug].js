import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../container/Product";
import { useStateContext } from "../../context/stateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const [decQty, InQty] = useStateContext();
  return (
    <div>
      <div className="product-detail-container">
        {" "}
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt=""
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((img, i) => (
              <img
                src={urlFor(img)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />

            <p>(20)</p>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                {" "}
                <AiOutlineMinus />
              </span>
              <span className="num" onClick={() => {}}>
                {" "}
                0
              </span>
              <span className="plus" onClick={InQty}>
                {" "}
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => ""}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={() => ""}>
              Buy Now
            </button>
          </div>
        </div