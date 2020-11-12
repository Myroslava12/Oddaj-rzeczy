import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home/Home";
import LogIn from "./Login/LogIn";
import Register from "./Register/Register";
import LoggedInForm from "./LoggedinForm/LoggedInForm";
import LogOut from "./Logout/LogOut";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.LOG_IN} component={LogIn}/>
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.FORM} component={LoggedInForm}/>
          <Route path={ROUTES.LOG_OUT} component={LogOut}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
