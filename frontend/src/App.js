import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { backend_host } from './config';
import './App.css';

//components
import Main from './components/Main';
import Guess_card from './components/Guess_card';
import Guess_table from './components/Guess_table';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				{/* App Component Has a Child Component called Main*/}
				<Main />
			</BrowserRouter>
		);
	}
}

export default App;
