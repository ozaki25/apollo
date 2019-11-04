import React from "react";
import { Redirect } from "react-router-dom";

const username = localStorage.getItem("name");

alert("auth" + username);
const Auth = props => (username ? props.children : <Redirect to={"/login"} />);

export default Auth;
