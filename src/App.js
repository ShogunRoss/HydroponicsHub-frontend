import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/Authenication/SignIn';
import SignUp from './components/Authenication/SignUp';
import Dashboard from './pages/Dashboard';

import AuthContext from "./context/auth-context";

const App = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const login = (token, userId, tokenExpiration) => {
		setToken(token);
		setUserId(userId);
	}
	const logout = () => {
		setToken(null);
		setUserId(null);
	}

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
				<AppBar />
				<Switch>
					{token && <Redirect from="/" to="/dashboard" exact />}
					{token && <Redirect from="/signin" to="/dashboard" exact />}
					{token && <Redirect from="/signup" to="/dashboard" exact />}
					{!token && <Redirect from="/dashboard" to="/" exact/>}
					{!token && <Route exact path='/' component={WelcomePage} />}
					{token && <Route exact path='/dashboard' component={Dashboard} />}
					<Route exact path='/signin' component={SignIn} />
					<Route exact path='/signup' component={SignUp} />
				</Switch>
			</AuthContext.Provider>

		</BrowserRouter>

	);
}

export default App;