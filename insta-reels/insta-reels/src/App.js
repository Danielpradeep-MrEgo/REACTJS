import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import VideoHeader from "./VideoHeader";

function App() {
  return (
    //BEM = block element modifier
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"
        />
        <h1>Reels</h1>
        {/* image at the top */}
        {/* Reels text */}
      </div>

      <div className="app__videos">
        <VideoCard
          channel='danny'
          avatarSrc="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"
          song='test song - DAnny'
          url="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"
          likes={100}
          shares={10}
        />
        <VideoCard />
        <VideoCard />
        {/* scrollable container of app__ videos */}
      </div>
    </div>
  );
}

export default App;
