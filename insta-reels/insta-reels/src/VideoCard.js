import React, { useState, useRef } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter"
import "./VideoCard.css";

function VideoCard({ url, shares, likes, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
 
  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://sec.ch9.ms/ch9/bc60/3cccde08-90e1-4dc4-88aa-adc39d8abc60/awstoazure.mp4_mid.mp4"
        //src={url}
        alt="iG reel video"
        loop
      />

      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        shares={shares}
        likes={likes}
      />
    </div>
  );
}

export default VideoCard;
