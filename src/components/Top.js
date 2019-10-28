import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBox from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";

//Chart
import { LineChart, Line } from "recharts";

//ButtomNavi
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: "auto",
    backgroundColor: "blue"
  }
}));

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 1000 },
  { name: "Page D", uv: 500 },
  { name: "Page E", uv: 8000 }
];

function Top() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Top
            </Typography>
            <Button color="inherit" onClick={() => history.push("/logout")}>
              LogOut
            </Button>
            <AccountBox></AccountBox>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <LineChart width={400} height={400} data={data}>
          <Line tyope="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
      </div>
      <footer className={classes.footer}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </footer>
    </React.Fragment>
  );
}
export default Top;
