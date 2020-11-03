import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";
import LoggedIn from "./LoggedIn";
import LogOut from "./LogOut";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.LOG_IN} component={LogIn}/>
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.LOGGED_IN} component={LoggedIn}/>
          <Route path={ROUTES.LOG_OUT} component={LogOut}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
