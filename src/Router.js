import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Top from './components/Top'

function Router(){
    return(
        <BrowserRouter>
            <div>
                <Route path='/' component={Login} exact />
                <Route path='/top' component={Top} exact />
            </div>
        </BrowserRouter>
    );
}

export default Router;
