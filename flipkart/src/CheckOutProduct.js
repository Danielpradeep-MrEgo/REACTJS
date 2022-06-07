import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, image, rating, price);

  const removeFromBasket = () => {
    //remove items from basket......
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div>
        <img className="checkoutProduct__image" src={image} alt="" />
      </div>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {/* 
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))} */}
          {/*  
              <small>rating: </small>
              <strong>{rating}</strong>
              */}
        </div>
        <button>SAVE FOR LATER</button>
        <button onClick={removeFromBasket}>REMOVE</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
