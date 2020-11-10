import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home";
import LogIn from "./Login";
import Register from "./Register";
import LoggedIn from "./Loggedin";
import LogOut from "./Logout";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.LOG_IN} component={LogIn}/>
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.FORM} component={LoggedIn}/>
          <Route path={ROUTES.LOG_OUT} component={LogOut}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
