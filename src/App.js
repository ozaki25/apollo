import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './components/Login'
import Logout from './Logout'
import Top from './components/Top'
import Auth from  './Auth'

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Auth>
            <Switch>
              <Route exact path='/top' component={Top} />
              <Redirect from='/' to='/top' />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    )
  }
}

export default App;
