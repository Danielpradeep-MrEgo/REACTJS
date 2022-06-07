import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ReactDOM from "react-dom"

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter__home">
    <div className="videoFooter">
      <div className="video__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
        
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
      <div className="footer">
      </div>
      </div>
    </div>
  );
}

// ReactDOM.render(<VideoFooter />, document.getElementById("root"));

export default VideoFooter;
