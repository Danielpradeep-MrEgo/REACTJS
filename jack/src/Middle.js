import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import { db, auth, storage } from "./firebase";
import firebase from "firebase/app";
import AttachmentIcon from "@material-ui/icons/Attachment";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Middle.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Middle() {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const user = auth.currentUser;
  const [videourl, setVideourl] = useState("");
  const classes = useStyles();
  const [hide, setHide] = useState(false);

  var inputElement = "";

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  triggerFileUpload = triggerFileUpload.bind(this);

  function triggerFileUpload() {
    inputElement.click();
    setHide(true);
  }

  const Upload = (e) => {
    e.target.value = null;
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("uploads").add({
              imageUrl: url,
              name: description,
              video: videourl,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setProgress(0);
            setHide(false);
            setImage(null);
          });
        setImage(null);
        setDescription("");
        setVideourl("");
      }
    );
    setImage(null);
  };

  const doublehide = () => {
    setHide(false);
  };
  return (
    <div className="middle">
      <div className="middle__container">
        <CircularProgress
          className="image__circle"
          variant="static"
          color="smokewhite"
          value={progress}
        />
        <Grid>
          <div
            style={{ display: "flex" }}
            className={classes.root}
            style={{
              alignItems: "center",
              left: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space between",
              }}
              className="middle__inputs"
            >
              <input
                type="text"
                value={videourl}
                onChange={(e) => setVideourl(e.target.value)}
                placeholder="Enter URL"
                style={{
                  outline: "none",
                  border: "none",
                  borderRadius: "5px",
                  height: "4vh",
                  width: "180%",
                  marginBottom: "10px",
                }}
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                style={{
                  outline: "none",
                  border: "none",
                  borderRadius: "5px",
                  height: "4vh",
                  width: "180%",
                }}
              />
            </div>
            <input
              className={classes.input}
              type="file"
              ref={(input) => (inputElement = input)}
              onClick={Upload}
              onChange={handleChange}
            />

            <Button
              style={{ color: "white", backgroundColor: "black", zIndex: "1" }}
              onClick={triggerFileUpload}
            >
              Upload
            </Button>

            <IconButton
              onDoubleClick={doublehide}
              color="primary"
              style={
                hide === true
                  ? { display: "" }
                  : { display: "none", cursor: "pointer" }
              }
            >
              <SendIcon onClick={handleUpload} />
            </IconButton>
            <h2 style={{ color: "white" }}>{image?.name}</h2>
          </div>
        </Grid>
      </div>
      <div className="button">
        <Link to="/">
          <Button style={{ color: "white", backgroundColor: "#007580" }}>
            <ArrowLeftIcon />
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Middle;
