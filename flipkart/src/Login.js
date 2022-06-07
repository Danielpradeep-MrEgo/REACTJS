import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const login = (event) => {
    event.preventDefault(); //this will stops refresh
    ///do the login logic....
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
      //logged in successfully, redirect to homepage
      history.push('/')
    })
    .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    ///do the login logic....
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth => {
      //created a user and logged in........., then redirect to the homepage
      history.push('/')
    })
    .catch((e) => alert(e.message))
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login__div">
          <span className="login__bigcap">Login</span>
          <span className="login__ptag">
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </span>
          <img
            className="login__image"
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_dec4bf.png"
          />
        </div>
            </Link>

        <div className="login__form">
          <form>
            <input
              className="login__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter Email/Mobile number "
            />
            <input
              className="login__input"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              placeholder="Enter Your password"
            />
          </form>
          <p className="login__formp">
            By sign in, you agree to Flipkart's Terms of Use and Privacy Policy.
          </p>
          <button onClick={login}>Sign In</button>
          <button onClick={register}>
            Create your Account
          </button>
        </div>
    </div>
  );
}

export default Login;
