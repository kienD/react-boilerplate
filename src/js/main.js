import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter,
	NavLink,
	Route
} from 'react-router-dom';

import '../css/styles.scss';

import Contact from './pages/Contact';
import Home from './pages/Home';

const appNode = document.createElement('div');

appNode.id = 'app';

document.body.appendChild(appNode);

ReactDOM.render(
	<BrowserRouter>
		<div>
			<h1>Sample HEADER</h1>

			<ul className="nav">
				<li>
					<NavLink exact to="/">Home</NavLink>
				</li>

				<li>
					<NavLink exact to="/contact">Contact</NavLink>
				</li>
			</ul>

			<Route exact path="/" component={Home} />

			<Route path="/contact" component={Contact} />
		</div>
	</BrowserRouter>,
	appNode
);