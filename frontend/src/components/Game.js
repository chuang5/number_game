import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { backend_host } from '../config';
import '../App.css';

//components
import Guess_card from './Guess_card';
import Guess_table from './Guess_table';


class Game extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<div class="container">
					<Guess_card />
					<Guess_table />
				</div>
			</div >
		);
	}
}

export default Game;
