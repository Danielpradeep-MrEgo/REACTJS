import React from "react";
import "./CheckOutHeader.css";
import { useStateValue } from "./StateProvider";


function CheckOutHeader() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkOut">
      <div className="checkOut__right">
        <h3>My Cart ({basket.length})</h3>
        {/* <h3>My Cart</h3> */}
      </div>
      
    </div>
  );
}

export default CheckOutHeader;
