import React from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove to basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutproduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p key={i}>
                  <span role="img" aria-label={"start" + i}>
                    🌟
                  </span>
                </p>
              );
            })}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>
            Remove Product from Basket{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
