import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/Authenication/SignIn";
import SignUp from "./pages/Authenication/SignUp";
import Admin from "./pages/Admin/Admin";
import "./App.css";
import AuthContext from "./context/auth-context";

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };
  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <AuthContext.Provider
        value={{
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Switch>
          {token && <Redirect from="/signin" to="/admin/dashboard" exact />}
          {token && <Redirect from="/signup" to="/admin/dashboard" exact />}
          {/* {token && <Route exact path='/admin' component={Admin} />}
          {!token && <Redirect from="/admin" to="/signin" exact />} */}
          <Route path="/admin" component={Admin} />
          <Redirect from="/admin" to="/admin/dashboard" />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
