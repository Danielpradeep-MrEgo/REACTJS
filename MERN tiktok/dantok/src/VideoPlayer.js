import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import ReactDOM from "react-dom";
import axios from "./axios";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import Profile from "./Profile";

function VideoPlayer() {
  const [videos, setVideos] = useState([]);
  const [videoSidebars, setVideoSidebars] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [videoFooters, setVideoFooters] = useState([]);

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
      setVideoSidebars(response.data);
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
      setVideoFooters(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div>
      {videos.map((
        { url, likes, shares, messages, avatar ,song, description, channel}
      ) => (
        <Video
          avatar={avatar}
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
        />
      ))}

      {/* {videoSidebars.map(({ likes, messages, shares }) => (
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
      ))} */}

      {/* {profiles.map(({ channel, avatar }) => (
        <Profile channel={channel} avatar={avatar} />
      ))} */}

      {/* {videoFooters.map(({ channel, description, song }) => (
        <VideoFooter channel={channel} description={description} song={song} />
      ))} */}


      
    </div>
  );
}

// ReactDOM.render(<VideoPlayer />, document.getElementById("root"));

export default VideoPlayer;

{
  /* <Video
          url="https://sec.ch9.ms/ch9/bc60/3cccde08-90e1-4dc4-88aa-adc39d8abc60/awstoazure.mp4_mid.mp4"
          channel="Danny"
          description="hisaklndndnf"
          song="i am mad"
          messages={30}
          likes={30}
          shares={3}
        /> */
}
{
  /* <Video />
        <Video /> */
}
