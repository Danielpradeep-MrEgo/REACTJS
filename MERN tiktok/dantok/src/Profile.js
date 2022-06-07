import React from "react";
import "./Profile.css";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Avatar, Button } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import SettingsInputComponentOutlinedIcon from "@material-ui/icons/SettingsInputComponentOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Grid from "@material-ui/core/Grid";

function Profile({ channel, avatar }) {
  return (
    <div className="profile">
      <div className="profile__header">
        <GroupAddOutlinedIcon />
        <p>
          <strong>{channel}</strong>
        </p>
        <MoreHorizOutlinedIcon />
      </div>
      <div>
        <br />
        <br />
      </div>
      <div className="animate">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="center">
        <div className="profile__avatar">
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img src={avatar} className="profile__avatar" />
            </Grid>
          </Grid>
          <h5>@{channel}</h5>
        </div>
      </div>


      <div className="p__end">
        <p>videos</p>
      </div>

      <div className="profile__tags">
        <div className="profile__tagsP">
          <p>
            <strong>32</strong>
          </p>
          <h6>Following</h6>
        </div>
        <div className="profile__tagsP">
          <p>
            <strong>32</strong>
          </p>
          <h6>Followers</h6>
        </div>
        <div className="profile__tagsP">
          <p>
            <strong>32</strong>
          </p>
          <h6>Hearts</h6>
        </div>
      </div>

      <div className="profile__row">
        <Button>Edit Profile</Button>
        <BookmarkBorderOutlinedIcon />
      </div>

      <div className="p">
        <p>Easy social media how to videos</p>
      </div>

      <div className="profile__section">
        <SettingsInputComponentOutlinedIcon />
        <FavoriteBorderIcon />
      </div>

      <div className="profile__sectionPhoto">
        <img src="https://placeimg.com/640/480/nature" alt="" />
        <img src="https://placeimg.com/640/480/nature" alt="" />
        <img src="https://placeimg.com/640/480/nature" alt="" />
        <img src="https://placeimg.com/640/480/nature" alt="" />
      </div>

      <div className="p__end">
        <p>You've reached the end</p>
      </div>
    </div>
  );
}

export default Profile;
// ReactDOM.render(<Profile />, document.getElementById("root"));
