import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import firebase from "./firebase";

class Logout extends Component {
  async componentDidMount() {
    await localStorage.removeItem("name");
    await User.logout();
    await firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>Logout</div>
        <Link to="/login">goto login</Link>
      </div>
    );
  }
}

export default Logout;
