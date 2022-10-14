import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './SidebarRow.module.css';

// props --> src, Icon, title
function SidebarRow(props) {
  return (
    <div className={classes.sidebarRow}>
        {props.src && <Avatar src={props.src} />}
        {props.Icon && <props.Icon />}
        <h4>{props.title}</h4>
    </div>
  )
}

export default SidebarRow;