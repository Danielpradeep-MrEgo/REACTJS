import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from './StateProvider'
import { auth } from "./firebase";

function Header() {

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }


  //const [{ basket }] = useStateValue();
  // const [ { basket }, dispatch] = useStateValue();
  //console.log(basket)
  const [{ basket, user }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        {/* amazon logo on the left img */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links*/}
      <div className="header__nav">
        {/* 1st links   HREF causes a refresh  and this is spa=single page <link> not refresh */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            {/* we can use span or p tag */}
            {/* <span className="header__optionLineOne">Hello {user?.email}, Sign in </span> */}
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'} </span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
        </Link>

        {/* 2nd links*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>

        {/* 3rd links*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket */}
      <Link to="/checkout">
        <div className="header__optionBasket">
          {/* shopping basket icon */}
          <ShoppingCartIcon />

          {/* number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
