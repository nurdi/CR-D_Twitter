import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, IndexRoute, Switch } from 'react-router-dom';

import App from './App.jsx';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App}></Route>
		</Switch>
	</HashRouter>, 
	document.getElementById('app')
);
