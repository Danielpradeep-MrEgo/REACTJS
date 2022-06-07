// import React from "react";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import VideoFooterIcon from "./VideoFooterIcon";
import VideoFooter from "./VideoFooter";
import VideoPlayer from "./VideoPlayer";
import Chat from "./Chat";
import WebcamStreamCapture from "./Add";
import Search from "./Search";
import VideoSidebar from "./VideoSidebar";
import Video from "./Video";
import axios from "./axios";
import SearchPage from "./SearchPage";

function App({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
  avatar,
  hashtags,
}) {
  const [videos, setVideos] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [searchpages, setSearchpages] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setProfiles(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setSearchpages(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <div className="app__videos">
            <Route path exact="/">
              {videos.map(
                ({
                  url,
                  likes,
                  shares,
                  messages,
                  avatar,
                  hashtags,
                  song,
                  description,
                  channel,
                }) => (
                  <Video
                    avatar={avatar}
                    url={url}
                    channel={channel}
                    song={song}
                    likes={likes}
                    messages={messages}
                    description={description}
                    shares={shares}
                    hashtags={hashtags}
                  />
                )
              )}

              {/* <VideoPlayer/> */}
              {/* <VideoSidebar likes={likes} messages={messages} shares={shares} /> */}
              {/* <VideoSidebar/> */}
              <VideoFooterIcon />
            </Route>

            <Route path="/chat">
              <Chat />
              <VideoFooterIcon />
            </Route>

            <Route path="/searchpage">
              {searchpages.map(({ hashtags }) => (
                <SearchPage hashtags={hashtags} />
              ))}
              <VideoFooterIcon />
            </Route>

            <Route path="/add">
              <WebcamStreamCapture />
              <VideoFooterIcon />
            </Route>

            <Route path="/profile">
              {/* <Profile channel={channel} avatar={avatar} /> */}
              {profiles.map(({ channel, avatar }) => (
                <Profile channel={channel} avatar={avatar} />
              ))}
              {/* <Profile /> */}
              <VideoFooterIcon />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
