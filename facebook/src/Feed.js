import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
// import logo from "./logo.svg";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post
            key={id}
            profilePic={profilePic}
            message={message}
            timestamp={timestamp}
            username={username}
            image={image}
            /> */}
      {/* <Post
        // key={id}
        profilePic={
          <img src={logo} />
          //"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-facebook_f_logo_%282019%29.svg.png"
        }
        message="Wow"
        timestamp="this is a timestamp"
        username="daniel"
        image="https://scontent.fvtz3-1.fna.fbcdn.net/v/t15.5256-10/p180x540/94420575_534566990812771_7400229793469300736_n.jpg?_nc_cat=1&_nc_sid=ad6a45&_nc_ohc=0gLuKoXuaKYAX_8_vzI&_nc_ht=scontent.fvtz3-1.fna&oh=073104e71db79574742cdc4dc090a402&oe=5F6FD198"
      />
      <Post /> */}
    </div>
  );
}
export default Feed;
