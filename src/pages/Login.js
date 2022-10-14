import React from "react";
import classes from "./Login.module.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebaseConfig";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__logo}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="logo"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-2019-present.jpg"
          alt="logo title"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
