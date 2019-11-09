import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./components/Login";
import Logout from "./Logout";
import Top from "./components/Top";
import Favo from "./components/Favo";
import Nearby from "./components/Nearby";
import Auth from "./Auth";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

// serviceWorker
import { register } from "./serviceWorker";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Auth>
          <Header />
          <Switch>
            <Route exact path="/target" component={Top} />
            <Route exact path="/sns" component={Favo} />
            <Route exact path="/notification" component={Nearby} />
            <Redirect from="/" to="/target" />
          </Switch>
          <Footer />
        </Auth>
      </Switch>
    </Router>
  );
}

register();
