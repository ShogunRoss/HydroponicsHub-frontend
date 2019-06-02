import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/Authenication/SignIn';
import SignUp from './components/Authenication/SignUp';

const App = () => {
	return (
		<BrowserRouter>
			<AppBar />
			<Switch>
				<Route exact path='/' component={WelcomePage} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/signup' component={SignUp} />
			</Switch>
		</BrowserRouter>

	);
}

export default App;