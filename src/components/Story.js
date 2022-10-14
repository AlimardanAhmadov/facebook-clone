import React from 'react';
import classes from './Story.module.css';
import { Avatar } from '@material-ui/core';

// props --> image, profileSrc, title
function Story(props) {
  return (
    <div style={{ backgroundImage: `url(${props.image})` }} className={classes.story}>
        <Avatar className={classes.story__avatar} src={props.profileSrc} />
        <h4>{props.title}</h4>
    </div>
  )
}

export default Story;