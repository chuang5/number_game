import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import '../App.css';
import { Redirect } from 'react-router';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let redirect = null;
		if(!window.sessionStorage.getItem('session')){
			window.sessionStorage.setItem('session', uuid());
			redirect = (
				<Redirect to='/start' />
			)
		}
		return (
			<div className="App">
				<header className="App-header">
					<p>Welcome to Guess the Number!</p>
				</header>
				{redirect}
			</div >
		);
	}
}

export default Nav;
