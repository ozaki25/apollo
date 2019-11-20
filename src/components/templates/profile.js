import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles1 = makeStyles(theme => ({
  formControl: {
    minWidth: 200
  }
}));

const useStyles2 = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField2: {
    width: 200
  }
}));

const useStyles3 = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField3: {
    width: 200
  }
}));

const useStyles4 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function DatePickers() {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [hour, setHour] = React.useState("");
  const [open2, setOpen2] = React.useState(false);

  const [targetDate, setTargetDate] = React.useState("");

  const handleChange2 = event => {
    setHour(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const targetDateChange = event => {
    setTargetDate(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes1.formControl}>
        受験資格 　{" "}
        <InputLabel id="demo-controlled-open-select-label1"></InputLabel>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>FE：基本情報技術者試験</MenuItem>
          <MenuItem value={2}>AE：応用情報技術者試験</MenuItem>
          <MenuItem value={3}>SC：安全確保支援士試験</MenuItem>
          <MenuItem value={4}>ST：ITストラテジスト試験</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      受験予定日
      <form className={classes2.container} noValidate>
        <TextField
          id="date"
          type="date"
          className={classes2.textField1}
          value={targetDate}
          onChange={targetDateChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <br></br>
      目標勉強時間
      <br></br>
      <FormControl className={classes3.formContro3}>
        <InputLabel id="demo-controlled-open-select-label3"></InputLabel>
        <Select
          id="demo-controlled-open-select3"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={hour}
          onChange={handleChange2}
        >
          <MenuItem value={1}>週1時間</MenuItem>
          <MenuItem value={2}>週2時間</MenuItem>
          <MenuItem value={3}>週3時間</MenuItem>
          <MenuItem value={4}>週4時間</MenuItem>
          <MenuItem value={5}>週5時間</MenuItem>
          <MenuItem value={6}>週6時間</MenuItem>
          <MenuItem value={7}>週7時間</MenuItem>
          <MenuItem value={8}>週8時間</MenuItem>
          <MenuItem value={9}>週9時間</MenuItem>
          <MenuItem value={10}>週10時間</MenuItem>
          <MenuItem value={11}>週11時間</MenuItem>
          <MenuItem value={12}>週12時間</MenuItem>
          <MenuItem value={13}>週13時間</MenuItem>
          <MenuItem value={14}>週14時間</MenuItem>
          <MenuItem value={15}>週15時間</MenuItem>
          <MenuItem value={16}>週16時間</MenuItem>
          <MenuItem value={17}>週17時間</MenuItem>
          <MenuItem value={18}>週18時間</MenuItem>
          <MenuItem value={19}>週19時間</MenuItem>
          <MenuItem value={20}>週20時間</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes4.margin}
        onClick={() => {
          console.log({ age }, { targetDate }, { hour });
          alert("目標を追加しました。");
          history.push("/mokuhyoukannri");
        }}
      >
        目標を追加する
      </Button>
    </div>
  );
}
