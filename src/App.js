import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Switch>
          {/* {token && <Redirect exact from="/admin" to="/admin/dashboard" />} */}
          {/* {!token && <Redirect from="/admin" to="/signin" />} */}

          <Redirect exact from="/admin" to="/admin/dashboard" />

          {token && <Redirect from="/signin" to="/admin" exact />}
          {token && <Redirect from="/signup" to="/admin" exact />}
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
