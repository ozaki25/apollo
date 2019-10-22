import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display:'flex',
        flexWrap: 'wrap',
        align: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width:200,
    }
}))

function Login (){
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                Name:<TextField 
                    className={classes.textField}
                /><br />
                Password:<TextField 
                    type="password"
                /><br />
                <Button variant="contained" color='primary'>LOGIN!</Button>
            </div>
        </form>
    )
}

export default Login