import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/TelaHome'
import Register from './pages/Register'
import LoginCozinha from './pages/Logins/LoginCozinha'
import HomeCozinha from './pages/Home/HomeCozinha'
import LoginCaixa from './pages/Logins/LoginCaixa'
import LoginGerencia from './pages/Logins/LoginGerencia'
import HomeGerencia from './pages/Home/HomeGerencia'



export default function Routes(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
				<Route path="/login-cozinha" component={LoginCozinha} />
				<Route path="/home-cozinha" component={HomeCozinha} />
				<Route path="/login-gerencia" component={LoginGerencia} />
				<Route path="/login-caixa" component={LoginCaixa} />
				<Route path="/home-gerencia" component={HomeGerencia} />
			</Switch>
		</BrowserRouter>
	);
 }