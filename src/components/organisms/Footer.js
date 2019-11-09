import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

//ButtomNavi
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: "100",
    margin: "0",
    padding: "0",
    width: "100%"
  }
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();
  const locate = useLocation();
  const [value, setValue] = React.useState(locate.pathname.slice(1));

  return (
    <footer className={classes.footer}>
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
          history.replace(`/${newValue}`);
        }}
        value={value}
        showLabels
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
          value="target"
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          value="sns"
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
          value="notification"
        />
      </BottomNavigation>
    </footer>
  );
}
export default Footer;
