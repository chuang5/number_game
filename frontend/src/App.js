import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//components
import Main from './components/Main';


class App extends Component {
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
