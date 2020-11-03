import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home/index";
import Login from "./LogIn/index";
import Register from "./Register/index";
import LoggedIn from "./LoggedIn/index";
import Logout from "./LogOut/index";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.LOG_IN} component={Login}/>
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.LOGGED_IN} component={LoggedIn}/>
          <Route path={ROUTES.LOG_OUT} component={Logout}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
