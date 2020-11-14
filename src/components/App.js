import React, {useContext, useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home/Home";
import LogIn from "./Login/LogIn";
import Register from "./Register/Register";
import LoggedInForm from "./Loggedin/LoggedInForm";
import LogOut from "./Logout/LogOut";
import {FirebaseContext} from "./Firebase";
import {FirebaseUserLoggedIn} from './Firebase/context';

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
        user ? setAuthUser(user) : setAuthUser(null);
    })
  }, [firebase.auth]);

  return (
    <>
      <FirebaseUserLoggedIn.Provider value={authUser}>
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.LOG_IN} component={LogIn}/>
            <Route path={ROUTES.REGISTER} component={Register}/>
            <Route path={ROUTES.FORM} component={LoggedInForm}/>
            <Route path={ROUTES.LOG_OUT} component={LogOut}/>
          </Switch>
        </Router>
      </FirebaseUserLoggedIn.Provider>
    </>
  )
}

export default App;
