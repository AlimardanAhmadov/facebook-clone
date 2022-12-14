import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "./Post.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

// props --> profilePic, image, username, timestamp, message
function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.post__top}>
        <Avatar src={props.profilePic} className={classes.post__avatar} />
        <div className={classes.post__topInfo}>
          <h3>{props.username}</h3>
          <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className={classes.post__bottom}>
        <p>{props.message}</p>
      </div>
      <div className={classes.post__image}>
        <img src={props.image} alt="" />
      </div>

      <div className={classes.post__options}>
        <div className={classes.post__option}>
            <ThumbUpIcon />
            <p>Like</p>
        </div>
        <div className={classes.post__option}>
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
        </div>
        <div className={classes.post__option}>
            <NearMeIcon />
            <p>Share</p>
        </div>
        <div className={classes.post__option}>
            <AccountCircleIcon />
            <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
