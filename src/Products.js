import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";
const Products = ({ id, title, image, price, rating, brand, alt }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch some item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_name">{title}</p>
        <small className="product_brand">Brand:{brand}</small>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span class="fa fa-star checked"></span>
            ))}
        </div>
      </div>
      <img alt={alt} src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Products;
