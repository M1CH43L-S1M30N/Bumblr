import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/" component={HomeContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// how to get errors not to persist
// what page is after login
// random route 404
// build protected route