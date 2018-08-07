import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Dashboard from './components/Dashboard';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	</Provider>, document.getElementById('root'));
