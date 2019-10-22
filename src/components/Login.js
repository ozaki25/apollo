import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router';


class Login extends React.Component {

    handleToTopPage = () => {
        this.props.history.push('/top')
    }

    render() {
        return(
        <form noValidate autoComplete="off">
            <div>
                Name:<TextField 
                /><br />
                Password:<TextField 
                    type="password"
                /><br />
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.handleToTopPage}>
                LOGIN!</Button>
            </div>
        </form>
        )
    }
}

export default withRouter(Login)