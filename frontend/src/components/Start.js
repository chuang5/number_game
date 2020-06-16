import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../App.css';
import axios from 'axios';
import { backend_host } from '../config';

//components


class Start extends Component {
    constructor(props) {
        super(props);

        this.startAGame = this.startAGame.bind(this);
    }

    startAGame = (e) => {
        e.preventDefault();
        axios.get(backend_host + '/start')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.answer)
                    window.sessionStorage.setItem('answer', response.data.answer)
                    window.location.href = '/game';
                }
            })
    }

    render() {
        return (
            <div className="App container">
                <Jumbotron >
                    <h5>Choose a level!</h5>
                    <p><Button onClick={this.startAGame}>Start the game</Button></p>
                </Jumbotron>
            </div >
        );
    }
}

export default Start;
