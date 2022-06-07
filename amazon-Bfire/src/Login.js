import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
//useHistory will listen to login and push in to the data layer
import { auth } from "./firebase"

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
      {/* <h1>Login Page</h1> */}
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h4>
            <small>Email (phone for mobile accounts)</small>
          </h4>
          
          {/* <div class="border-orange-500 border-opacity-100"> */}
          {/* <input  type="text" /> */}
          {/* <input type="email" /> */}

          {/* mapping email for user auth */}
          <input value={email} onChange={event => setEmail(event.target.value)}type="email" />

          {/* </div> */}
          <h4>
            <small>password</small>
          </h4>
          {/* <input type="text" /> */}
          {/* <input type="password" /> */}

          <input  onChange={event => setPassword(event.target.value)} value={password}type="password" />

          <button onClick={login} className="button__signin">
            sign in
          </button>
        </form>

        <p className="login__p">
          <h5>
            <small>
              By signing-in, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </small>
          </h5>
        </p>
        <button onClick={register} className="login__buttonreg">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
