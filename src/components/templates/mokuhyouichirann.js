import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
  export default function SimpleList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <strong>
          目標一覧    
        </strong>  
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="基本情報処理技術者試験" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="応用情報処理技術者試験" />
          </ListItemLink>
        </List>
      </div>
    );
  } 