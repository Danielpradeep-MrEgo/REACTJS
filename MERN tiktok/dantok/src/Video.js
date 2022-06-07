import React, { useRef, useState } from "react";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
import Header from "./Header";
import VideoFooterIcon from "./VideoFooterIcon";
import VideoFooter from "./VideoFooter";
import Profile from "./Profile";


// function Video({url}) {
function Video({ url, channel, description, song, likes, shares, messages,}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is  playing stoop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      // otherwise if its not play it
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <Header />
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
        // src="https://sec.ch9.ms/ch9/bc60/3cccde08-90e1-4dc4-88aa-adc39d8abc60/awstoazure.mp4_mid.mp4"
        // src="https://youtu.be/0KVZFw-Vjfw"
      />
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
      {/* <Profile channel={channel} avatar={avatar}/> */}
      {/* <VideoFooterIcon /> */}
    </div>
  );
}

export default Video;
