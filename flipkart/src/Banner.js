import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      {/* <img
        className="banner__imageOne"
        src="https://rukminim1.flixcart.com/flap/844/140/image/fa66a9a45545cade.jpg?q=50"
        alt="Motorola G9 "
      /> */}

      <img
        className="banner__imageTwo"
        //srcset="https://rukminim1.flixcart.com/flap/3376/560/image/6740e06a3cd690c6.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/6740e06a3cd690c6.jpg?q=50 1x"
        src="https://rukminim1.flixcart.com/flap/1688/280/image/6740e06a3cd690c6.jpg?q=50"
      />
    </div>
  );
}

export default Banner;
