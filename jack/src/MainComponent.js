import React, { useEffect, useState } from "react";
import "./MainComponent.css";
import logo1 from "./images/logo1.png";
import line from "./images/line.png";
import { Button } from "@material-ui/core";
import { auth, db } from "./firebase";
import ReactPlayer from "react-player";
import { StyleRoot } from "radium";
import { useStateValue } from "./StateProvider";

function MainComponent() {
  const [lists, setLists] = useState([]);
  const [{ search }] = useStateValue();
  const user = auth.currentUser;

  useEffect(() => {
    db.collection("uploads")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setLists(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const max = {
    "@media (min-width: 500px)": {
      display: "flex",
    },
    "@media (min-width: 501px)": {
      display: "none",
    },
  };

  const main = {
    "@media (min-width: 500px)": {
      flex: "1",
    },
    "@media (min-width: 501px)": {
      flex: "0.6",
    },
  };

  return (
    <div className="mainComponent">
      <div className="mainComponent__image" style={{ paddingBottom: "10px" }}>
        <img src={logo1} />
      </div>

      {lists
        .filter((list) => {
          if (search === "") {
            return list;
          } else if (list.name.includes(search)) {
            return list;
          } else if (list.timestamp) {
          }
        })
        .map((list) => (
          <p>
            <StyleRoot>
              <div style={max}>
                <ReactPlayer
                  url={list.video}
                  controls
                  // height="720px"
                  width="100%"
                  style={{ height: "720px", width: "100%" }}
                />
              </div>
              <div className="mainComponent__video">
                <ReactPlayer
                  url={list.video}
                  controls
                  height="670px"
                  width="100%"
                  style={{ height: "720px", width: "100%" }}
                />
              </div>
            </StyleRoot>
            <img src={line} />
            <h4 style={{ marginLeft: "20px", color: "white" }}>{list.name}</h4>
            <Button
              href={list.imageUrl}
              style={{
                position: "relative",
                borderRadius: "30px",
                backgroundColor: "#0a81ab",
                marginTop: "10px",
                color: "white",
                textTransform: "capitalize",
                width: "fit-content",
                marginBottom: "70px",
                marginLeft: "10px",
              }}
            >
              Download Files
            </Button>
          </p>
        ))}
    </div>
  );
}

export default MainComponent;
