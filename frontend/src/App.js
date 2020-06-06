import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import backend_host from './config';
import './App.css';

//components
import Guess_card from './components/Guess_card';
import Guess_table from './components/Guess_table';


class App extends Component {
	constructor(props) {
		super(props);

		//Bind the handlers to this class
		// this.handleChange = this.handleChange.bind(this);
		this.submitAnswer = this.submitAnswer.bind(this);
	}

	submitAnswer = (e) => {
		e.preventDefault();

		const data = {
			'data': 'data'
		}
		axios.put(backend_host + '/', data)
			.then(response => {
				console.log('Guess one more time');
			})
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>Welcome to Guess the Number!</p>
				</header>
				<div class="container">
					<Guess_card />
					<Guess_table />
				</div>
			</div >
		);
	}
}

export default App;
