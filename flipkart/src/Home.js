import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner from "./Banner";
import Nav from "./Nav";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      {/* <img
        className="home__image"
        src="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
      /> */}
      <div className="home">
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="sony Tv"
            price={238}
            rating={5}
            image="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
