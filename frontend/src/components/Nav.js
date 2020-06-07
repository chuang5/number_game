import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>Welcome to Guess the Number!</p>
				</header>
			</div >
		);
	}
}

export default Nav;
