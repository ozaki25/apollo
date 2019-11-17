import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

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
}));

const useStyles2 = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '10px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 'opx',
    },
});

const useStyles3 = makeStyles(theme => ({
    link: {
      margin: theme.spacing(1),
    },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple  tabs example" centered>
          <Tab label="目標管理" {...a11yProps(0)} />
          <Tab label="受験実績" {...a11yProps(1)} />
        </Tabs>
      </AppBar>  
    <Card className={classes2.card}>
      <CardContent>
       <Typography className={classes2.title} color="textSecondary" gutterBottom>
        <Link href="#" onClick={preventDefault} className={classes3.link}>
        {'基本情報処理技術者試験'}
        </Link>
       </Typography>
      </CardContent> 
    </Card>
    <Card className={classes2.card}>
      <CardContent>
       <Typography className={classes2.title} color="textSecondary" gutterBottom>
       <Link href="#" onClick={preventDefault} className={classes3.link}>
        {'応用情報処理技術者試験'}
        </Link>   
       </Typography>
      </CardContent> 
    </Card>
    </div>
  );
}
