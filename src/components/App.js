import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import LoggedIn from "./LoggedIn/LoggedIn";
import Logout from "./Logout/Logout";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/logged/in" component={LoggedIn}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
