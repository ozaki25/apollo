import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBox from "@material-ui/icons/AccountBox";
import { useHistory, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CreateIcon from "@material-ui/icons/Create";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

//Chart
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import { PieChart, Pie } from "recharts";

//ButtomNavi
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%"
  },
  header: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    zIndex: "100"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  contents: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    width: "100%",
    padding: "100"
  },
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: "100"
  },
  list: {
    width: 250
  }
}));

const data = [
  { name: "1~3年目", 取得者: 100 },
  { name: "4~5年目", 取得者: 150 },
  { name: "6~8年目", 取得者: 200 },
  { name: "9~10年目", 取得者: 120 },
  { name: "11~年目", 取得者: 50 }
];

const division = [
  { name: "基盤系", 取得者: 200 },
  { name: "業務系", 取得者: 100 },
  { name: "その他", 取得者: 50 }
];

function Top() {
  const classes = useStyles();
  const history = useHistory();
  const locate = useLocation();
  const [value, setValue] = React.useState(locate.pathname.slice(1));
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="目標" />
        </ListItem>
        <ListItem button key="targetregist">
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="目標追加" />
        </ListItem>
        <ListItem button key="regist">
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="実績追加" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="SNS" />
        </ListItem>
        <ListItem button key="chat">
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="通知" />
        </ListItem>
        <ListItem button key="notify">
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="通知" />
        </ListItem>
      </List>
    </div>
  );
  return (
    <React.Fragment>
      <div className={classes.root}>
        <header className={classes.header}>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Top
              </Typography>
              <Button
                color="inherit"
                onClick={() => history.replace("/logout")}
              >
                LogOut
              </Button>
              <AccountBox></AccountBox>
            </Toolbar>
          </AppBar>
        </header>
        <div className={classes.contents}>
          <h1>TOP PAGE!!!!!!!!!!</h1>
          <h2>取得者年次分布</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="取得者" fill="#8884d8" />
          </BarChart>
          <h2>取得者エリア分布</h2>
          <PieChart width={200} height={400}>
            <Pie
              data={division}
              dataKey="取得者"
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
          <p> Contents. </p>
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
              history.replace(`/${newValue}`);
            }}
            showLabels
          >
            <BottomNavigationAction
              label="Recents"
              icon={<RestoreIcon />}
              value="top"
            />
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteIcon />}
              value="favo"
            />
            <BottomNavigationAction
              label="Nearby"
              icon={<LocationOnIcon />}
              value="nearby"
            />
          </BottomNavigation>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default Top;
