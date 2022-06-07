import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import logo1 from "./images/logo1.png";
import google from "./images/google.jpg";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [random, setRandom] = useState();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const x = Math.floor(Math.random() * 14 + 1);
    setRandom(x);
  }, []);

  return (
    <div className="login">
      <img src={`/width/image${random}.jpg`} />
      <div className="login__sign">
        <div className="login__cont">
          <img src={logo1} />
          <Button
            onClick={signIn}
            style={{
              color: "black",
              borderRadius: "30px",
              width: "100%",
              borderColor: "white",
              backgroundColor: "white",
            }}
          >
            <img
              src={google}
              style={{ height: "30px", width: "30px", paddingRight: "5px" }}
            />
            sign In with Google
          </Button>
        </div>
        <div className="login__cont2">
          <img src={logo1} style={{ paddingBottom: "40px" }} />
          <Button
            onClick={signIn}
            style={{
              color: "black",
              borderRadius: "30px",
              width: "100%",
              borderColor: "white",
              backgroundColor: "white",
            }}
          >
            <img
              src={google}
              style={{ height: "30px", width: "30px", paddingRight: "5px" }}
            />
            sign In with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
