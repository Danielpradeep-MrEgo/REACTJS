import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import CheckOutHeader from "./CheckOutHeader";
import CheckOutFooter from "./CheckOutFooter";
import SubTotal from "./SubTotal";

function CheckOut({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__div">
        <CheckOutHeader />
        <div className="checkout__left">
          {basket?.map((item) => (
            //console.log(item.id)
            <CheckOutProduct
              className="info"
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <CheckOutFooter />
      </div>
      <div className="checkout__right"> 
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
