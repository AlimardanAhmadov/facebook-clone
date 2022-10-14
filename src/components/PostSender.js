import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./PostSender.module.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotiIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebaseConfig";
import firebase from "firebase/compat/app";

function PostSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className={classes.postSender}>
      <div className={classes.postSender__top}>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={classes.postSender__input}
            type="text"
            placeholder={`What is on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className={classes.postSender__bottom}>
        <div className={classes.postSender__option}>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className={classes.postSender__option}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className={classes.postSender__option}>
          <PhotoLibraryIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostSender;
