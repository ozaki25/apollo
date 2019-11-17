import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div>
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.purpleAvatar}>CM</Avatar>
    </Grid>
    <TextField
          id="outlined-multiline-static"
          label="コメント"
          multiline
          rows="4"
          width="2500"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
    />
    <br></br>
    <Button variant="contained" size="large" color="primary" className={classes2.margin}>
      投稿する
    </Button>
    </div>
  );
}