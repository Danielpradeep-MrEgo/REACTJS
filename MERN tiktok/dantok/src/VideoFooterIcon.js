import React, { useEffect, useState } from "react";
import "./VideoFooterIcon.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Router } from "@material-ui/icons";
import axios from "./axios";

function VideoFooterIcon() {
  const [videoSidebars, setVideoSidebars] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideoSidebars(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  return (
    // <Router>

    <div className="videoFooterIcon">
      <div className="footer__bottom">
        <div className="icons">
          <Link to="/">
            <HomeIcon fontSize="large"  className="icons"/>
          </Link>
        </div>
        <div className="icons">
          <Link to="/searchpage">
            <SearchIcon fontSize="large" className="icons"/>
          </Link>
        </div>
        <div className="icons__add">
          <Link to="/add">
            <AddIcon fontSize="large"  className="icons__adds"/>
          </Link>
        </div>
        <div className="icons">
          <Link to="chat">
            <ChatBubbleIcon fontSize="large"  className="icons"/>
          </Link>
        </div>
        <div className="icons">
          <Link to="/profile">
            <PersonOutlineIcon fontSize="large"  className="icons"/>
          </Link>
        </div>
      </div>
    </div>
    // {/* </Router> */}
  );
}

// ReactDOM.render(
//   <VideoFooterIcon />,
//   document.getElementById("root")
// );

export default VideoFooterIcon;
