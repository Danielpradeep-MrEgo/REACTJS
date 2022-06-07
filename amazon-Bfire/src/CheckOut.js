import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";


function CheckOut() {
   const [{ basket }, dispatch] = useStateValue();
  //const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Ghulak/SignIn_1.jpg"
      />
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/Offerpage_1500x3001.jpg"
      />
      {/*
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/JulyOffers/IMC500/N2UPI500/Download.jpg"
      />
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/JulyOffers/IMC500/N2UPI500/Apps_01.jpg"
      />
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/JulyOffers/IMC500/N2UPI500/Apps_02.jpg"
      />
      */}
      {basket?.length === 0 ? (
        <div className="checkout__bottom">
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            you have no items in your basket. To buy one or "Add to basket" next
            to the items.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* listout all of the checkout product */}
          {/* {basket?.map((item) => {
            console.log(item.id);
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })} */}
          {basket?.map((item) => (
            //console.log(item.id)
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          ))}
        </div>
      )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          {/* <h1>Subtotal</h1> */}
          <SubTotal/>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
