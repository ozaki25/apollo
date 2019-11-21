import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Target from "./components/Target";
//import Notification from "./components/Notification";
import Notification from "./components/templates/notification";
import Auth from "./Auth";

import Header from "./components/organisms/Header";
import confirmprofile from "./components/templates/confirmprofile";
import confirmprofileother from "./components/templates/confirmprofileother";
import goukakuki from "./components/templates/goukakuki";
import jissekikannri from "./components/templates/jissekikannri";
import snsOverview from "./components/templates/snsOverview";
import jissekisyousai from "./components/templates/jissekisyousai";
import jissekitouroku from "./components/templates/jissekitouroku";
import mokuhyouichirann from "./components/templates/mokuhyouichirann";
import mokuhyoukannri from "./components/templates/mokuhyoukannri";
import notification from "./components/templates/notification";
import profile from "./components/templates/profile";
import resistersns from "./components/templates/resistersns";
import sinncyokukannri from "./components/templates/sinncyokukannri";
import targetRegistry from "./components/templates/targetRegistry";

import { makeStyles } from "@material-ui/core/styles";

// serviceWorker
import { register } from "./serviceWorker";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%"
  },
  contents: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    width: "100%",
    padding: "100"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Auth>
              <Route exact path="/" component={mokuhyouichirann} />
              <Header />
              <Switch>
                <Route exact path="/target" component={Target} />
                <Route exact path="/notification" component={Notification} />

                <Route
                  exact
                  path="/confirmprofile"
                  component={confirmprofile}
                />
                <Route
                  exact
                  path="/confirmprofileother"
                  component={confirmprofileother}
                />
                <Route exact path="/goukakuki" component={goukakuki} />
                <Route exact path="/jissekikannri" component={jissekikannri} />
                <Route
                  exact
                  path="/jissekisyousai"
                  component={jissekisyousai}
                />
                <Route
                  exact
                  path="/jissekitouroku"
                  component={jissekitouroku}
                />
                <Route
                  exact
                  path="/mokuhyouichirann"
                  component={mokuhyouichirann}
                />
                <Route
                  exact
                  path="/mokuhyoukannri"
                  component={mokuhyoukannri}
                />
                <Route exact path="/notification" component={notification} />
                <Route exact path="/profile" component={profile} />
                <Route exact path="/resistersns" component={resistersns} />
                <Route exact path="/snsOverview" component={snsOverview} />
                <Route
                  exact
                  path="/targetRegistry"
                  component={targetRegistry}
                />
                <Route
                  exact
                  path="/sinncyokukannri"
                  component={sinncyokukannri}
                />
              </Switch>
              {/* <Footer /> */}
            </Auth>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

register();
