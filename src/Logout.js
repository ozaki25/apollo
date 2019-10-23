import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from './User'

class Logout extends Component {
    async componentDidMount(){
        await User.logout();
    }

    render(){
        return(
            <div>
            <div>Logout</div>
            <Link to="/login">goto login</Link>
            </div>
        )
    }
}

export default Logout