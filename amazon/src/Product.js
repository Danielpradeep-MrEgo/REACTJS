import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, price, rating }) {

  const [ { basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add items to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        //left side id is key and rightside is a value
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }


  return (
    <div className="product">

      <div className="product__info">
      <p>{title}</p>
      </div>

      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
        {/*  
            <small>rating: </small>
            <strong>{rating}</strong>
            */}
      </div>
      
      <img src={image} alt=""/>

      {/* you can use push method also instead of addtobasket */}
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
