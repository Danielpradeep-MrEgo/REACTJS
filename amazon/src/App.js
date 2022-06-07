import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

{
  /* client side routing */
}

const promise = loadStripe(
  "pk_test_51HQBJ9BC8ehEDK8yIib24fRaRkVA9DQP52ThFFYGGA6NejsUrJNDzLfsG03f1OHNJo1nU0W7GySjqyaCJuybyDJ000Q7dbs17S"
);
function App() {
  // const [{ basket }, dispatch] = useStateValue();

  const [{ user }, dispatch] = useStateValue();

  //useEffect  Hook
  //piece of code which runs based on a given condition

  //it will runs only when the app component loads and then stops
  /*useEffect(() => {
      effect
      return () => {
        cleanup
      }
    }, [input])*/

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //when this app rerender this will diattcach and reattach with a new listner
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>>> ", user);

  return (
    <Router>
      <div className="app">
        {/* react router  will switch b/w the pages without reloading the page */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
            {/* <h1>checkout</h1> */}
          </Route>

          <Route path="/orders">
        <Orders/>
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
            {/* <h1>Login page</h1> */}
          </Route>

          <Route path="/">
            <Header />
            <Home />
            {/* <h1>HOME page</h1> */}
          </Route>
        </Switch>

        {/* we need React-Router*/}
      </div>
    </Router>
  );
}

export default App;
