import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    display: 'block',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>

      <br></br>
      <strong>
        応用情報技術者試験
      </strong>
      <br></br>
      <br></br>
      <strong>
        受験日
      </strong>
      <br></br>
        2019年xx月xx日    
      <br></br>
      <br></br>
      <strong>
        点数
      </strong>
      <br></br>
        午前１：80点、午前２：95点
      <br></br>
      　午後１：70点、午後２：65点　
      <br></br>
      <br></br>
      <ListItem button onClick={(event) => history.push("/goukakuki")}>
      <Button variant="contained" size="large" color="primary" className={classes.margin}>
         合格記を書く
      </Button>
      </ListItem>
    </div>
  );
}
