import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const useStyles2 = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "10px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: "opx"
  }
});

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes2 = useStyles2();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple  tabs example"
          centered
        >
          <Tab label="目標一覧" {...a11yProps(0)} />
          <Tab label="受験実績一覧" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <ListItem
                button
                onClick={event => history.push("/sinncyokukannri")}
              >
                <ListItemText primary="LPIC level2" />
              </ListItem>
            </Typography>
          </CardContent>
        </Card>
        <Divider />
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <ListItem
                button
                onClick={event => history.push("/sinncyokukannri")}
              >
                <ListItemText primary="情報処理安全確保支援士" />
              </ListItem>
            </Typography>
          </CardContent>
        </Card>
        <Divider />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <ListItem
                button
                onClick={event => history.push("/jissekisyousai")}
              >
                <ListItemText primary="基本情報処理技術者試験" /> 2018/08/30
                合格
              </ListItem>
            </Typography>
          </CardContent>
        </Card>
        <Divider />
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <ListItem
                button
                onClick={event => history.push("/jissekisyousai")}
              >
                <ListItemText primary="応用情報処理技術者試験" /> 2018/04/15
                合格
              </ListItem>
            </Typography>
          </CardContent>
          <Divider />
        </Card>
      </TabPanel>
    </div>
  );
}
