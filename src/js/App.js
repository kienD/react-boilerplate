import {Component} from 'react';
import {IndexLink} from 'react-router';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Sample HEADER</h1>

				<ul className="nav">
					<li>
						<IndexLink activeClassName="active" to="/">Home</IndexLink>
					</li>

					<li>
						<Link activeClassName="active" to="/Contact">Contact</Link>
					</li>
				</ul>

				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
