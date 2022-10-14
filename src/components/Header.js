import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="facebook logo"
        />
        <div className={classes.search__input}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={classes.header__middle}>
        <div className={classes.header_nav}>
          <HomeIcon fontSize="large" />
        </div>
        <div className={classes.header_nav}>
          <FlagIcon fontSize="large" />
        </div>
        <div className={classes.header_nav}>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.header_nav}>
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.header_nav}>
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className={classes.header__right}>
        <div className={classes.header__info}>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
