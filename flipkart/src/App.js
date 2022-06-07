import React, {useEffect} from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./CheckOut";
import Login from "./Login";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"


function App() {

  const [{user}, dispatch] =useStateValue()

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      //when this app rerender this will diattcach and reattach with a new listner
      unsubscribe()
    }
  }, [])

  console.log('USER IS >>>>> ',user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
