import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SignIn from './pages/Authenication/SignIn';
import SignUp from './pages/Authenication/SignUp';
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
					<Switch>
						{token && <Redirect from="/signin" to="/dashboard" exact />}
						{token && <Redirect from="/signup" to="/dashboard" exact />}
						{token && <Route exact path='/dashboard' component={Dashboard} />}
						{!token && <Redirect from="/dashboard" to="/signin" exact />}
						<Route exact path='/' component={WelcomePage} />
						<Route exact path='/signin' component={SignIn} />
						<Route exact path='/signup' component={SignUp} />
					</Switch>
			</AuthContext.Provider>

		</BrowserRouter>

	);
}

export default App;