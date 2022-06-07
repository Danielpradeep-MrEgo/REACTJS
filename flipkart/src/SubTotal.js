import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <div className="subtotal__content">
        <p>PRICE DETAILS</p>
        {/* price */}
        {/* <button>Proceed To CheckOut</button> */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Price ({basket.length} items) : <strong>{`${value}`}</strong>
                {/* Price ({basket} items) : <strong>{`${value}`}</strong> */}
              </p>
              <p>Delivery Charges</p>
              <h4>Total Amount {value}</h4>
              {/* <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small> */}
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          //value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        {/* <button>Proceed To CheckOut</button> */}
      </div>
      <p><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/shield_435391.svg"/>  Safe and Secure Payments.Easy returns.100% Authentic products.</p>
    </div>
  );
}

export default SubTotal;
