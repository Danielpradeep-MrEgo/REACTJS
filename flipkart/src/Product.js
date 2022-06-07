import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        //left side id is key and rightside is a value
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
      {/* <img src="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50" /> */}
      <img src={image} alt=""/>
      <div className="product__info">
        <p>{title}</p>
      </div>

      <div className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>

      <div className="product__rating">
        {/* <h6>
          rating <p>⭐</p>
        </h6> */}

        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <div className="product__buttons">
        <button onClick={addToBasket} className="cart__button">
          <ShoppingCartIcon />
          ADD TO CART
        </button>
        <button className="buy__button">
          <FlashOnIcon />
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default Product;
