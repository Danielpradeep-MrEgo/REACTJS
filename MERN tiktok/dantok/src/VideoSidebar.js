import React, { useState } from "react";
import "./VideoSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function VideoSidebar({ shares, messages, likes}) {
  const [liked, setLiked] = useState(false);
  const secondInteger = '1'
  // var like = parseInt(first)

  const firstInteger = parseInt(likes);
    var int = parseInt(secondInteger)
    var c=firstInteger+int
    console.log(c)
  
  // const [count, setCount] = useState()
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          // {/* {likes ? (
            <FontAwesomeIcon className="red" icon={faHeart} size="2x" onClick={(e) => setLiked(false)} />
        ) : (
          // <FavoriteIcon
          //   className="red"
          //   fontSize="large"
          //   onClick={(e) => setLikes(false)}
          // />
          <FontAwesomeIcon icon={faHeart} size="2x"
            fontSize="large"
            onClick={(e) => setLiked(true)}
            // onClick={(e) => setLiked(like + 1)}
          />
        )}
        
        <p>{liked ? c : likes}</p>
        {/* <p>{likes ? likes : 0}</p> */}
        {/* <FavoriteBorderIcon fontSize="large"><p>hello</p>{likes}</FavoriteBorderIcon> */}
        {/* <p>{likes}</p> */}
      </div>
      <div className="videoSidebar__button">
        {/* <MessageIcon fontSize="large" /> */}
        <FontAwesomeIcon icon={faComment} size="2x" className="fa__comment" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        {/* <ShareIcon fontSize="large" /> */}
        <FontAwesomeIcon icon={faShare} size="2x" />
        <p>share</p>
      </div>
    </div>
  );
}

// ReactDOM.render(<VideoSidebar />, document.getElementById("root"));

export default VideoSidebar;
