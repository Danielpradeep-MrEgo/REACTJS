import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import logo1 from "./images/logo1.png";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [{}, dispatch] = useStateValue();
  const user = auth.currentUser;

  const signOut = () => {
    auth.signOut();
    window.location.reload(false);
  };

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_SEARCH,
      search: search,
    });
  }, [search, dispatch]);

  const userId = user?.uid;

  return (
    <div className="header">
      <Avatar className="avatar__hide" src={user.photoURL} style={{ cursor: "pointer" }} />
      <img src={logo1} style={{ height: "45px" }} />
      <h4 style={{ color: "white" }}>Jack Studios</h4>
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {userId === "n6zFyCQkufXU1inBAJOYVK2G9L52" ? (
        <Link to="/upload">
          <Button
            style={{
              backgroundColor: "#28b5b5",
              textTransform: "inherit",
              height: "30px",
              width: "fit-content",
            }}
          >
            Upload
          </Button>
        </Link>
      ) : (
        ""
      )}
      <Button
        style={{
          backgroundColor: "#28b5b5",
          textTransform: "inherit",
          height: "30px",
          width: "fit-content",
        }}
        onClick={signOut}
      >
        sign Out
      </Button>
    </div>
  );
}

export default Header;
