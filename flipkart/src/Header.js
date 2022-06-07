import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Counter from "./Counter";


function Header() {
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      {/* <Navbar/> */}
      <div className="header__logo">
        <Link to="/">
          <img
            className="logo"
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            width="75%" //height="20px"
            alt="Flipkart"
          />
        </Link>

        <div className="header__text">
          <span>Explore</span>
          <span className="header__plus">plus</span>
          <img
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
            width="10px"
          />
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__login">
          <button>
            {/* <span className="header__optionLineOne">{user?.email}</span> */}
            <span className="header__optionTwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>

            <h3>{user?.email}</h3>
          </button>
        </div>
      </Link>

      <Link className="header__link">
        <div className="header__more">
          <h3>More</h3>
        </div>
      </Link>

      <Link to="/checkout" className="header__link">
        <div className="header__icon">
          <ShoppingCartIcon/>
          <Counter/>
          <h3>Cart</h3>
        </div>
      </Link>
    </div>
  );
}

export default Header;
