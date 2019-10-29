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
    marginBottom: theme.spacing(10)
  },
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: "100"
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
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <header className={classes.header}>
          <AppBar>
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
        </header>
        <div className={classes.contents}>
          <h1>this is nearby page</h1>
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
          <PieChart width={400} height={400}>
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
              history.push(`/${newValue}`);
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
