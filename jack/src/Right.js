import { Avatar, Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import "./Right.css";
import arrowDown from "./images/arrowDown.png";
import ReactPlayer from "react-player";
function Right() {
  const user = auth.currentUser;

  const [lists, setLists] = useState([]);

  useEffect(() => {
    db.collection("uploads")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setLists(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="right__main">
      <div className="right">
        <Grid container direction="row" justify="center">
          <Avatar
            src={user.photoURL}
            style={{ height: "150px", width: "150px" }}
          />
        </Grid>
        <Grid container direction="row" justify="center">
          <h3 style={{ color: "#fff5fd", margin: "10px" }}>
            {user?.displayName}
          </h3>
        </Grid>
        <h4
          style={{
            color: "white",
            fontWeight: "500",
            paddingTop: "10px",
            margin: "0px",
          }}
        >
          Subscribed???
        </h4>
        <h4
          style={{
            color: "white",
            fontWeight: "500",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: "10px",
          }}
        >
          Subscribe now by clicking
          <img
            src={arrowDown}
            style={{
              height: "30px",
              width: "auto",
              alignItems: "center",
              alignContent: "center",
            }}
          />
        </h4>
        <Button
          href={"https://www.youtube.com/results?search_query=jack+dave"}
          style={{
            color: "white",
            background: "#bb371a",
            marginBottom: "40px",
          }}
        >
          Subscribe
        </Button>

        <div>
          <h2 style={{ color: "white" }}>Recent</h2>

          {lists.map((list) => (
            <p>
              <ReactPlayer
                url={list.video}
                controls
                // height="720px"
                width="100%"
                style={{ height: "720px", width: "100%" }}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;
