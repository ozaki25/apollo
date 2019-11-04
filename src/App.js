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

// serviceWorker
import { register } from "./serviceWorker";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Auth>
          <Switch>
            <Route exact path="/top" component={Top} />
            <Route exact path="/favo" component={Favo} />
            <Route exact path="/nearby" component={Nearby} />
            <Redirect from="/" to="/top" />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
}

//register();
