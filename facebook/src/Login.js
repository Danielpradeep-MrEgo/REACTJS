import React from "react";
import "./Login.css";
import logo from "./logo.svg";
import logo_text from "./logo_text.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"

function Login() {

  const [state, dispatch] = useStateValue()
  const logIn = () => {
    // sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} />
        <h1 className="text">danbook</h1>
        {/* <img className="text"
        //   src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        //   alt="Facebook"
        src={logo_text}
        /> */}
      </div>

      {/* <Button type="submit" onClick="{LogIn}"> */}
      <Button type="submit" onClick={logIn}>
        Log In
      </Button>
      {/* <button value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_i">Log In</button> */}
    </div>
  );
}

export default Login;
