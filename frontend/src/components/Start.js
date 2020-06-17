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

        this.easyGame = this.easyGame.bind(this);
        this.normalGame = this.normalGame.bind(this);
        this.startAGame = this.startAGame.bind(this);
    }

    easyGame = (e) => {
        e.preventDefault();
        window.sessionStorage.setItem('level', 'easy');
        this.startAGame();
    }

    normalGame = (e) => {
        e.preventDefault();
        window.sessionStorage.setItem('level', 'normal');
        this.startAGame();
    }

    startAGame = (e) => {
        axios.get(backend_host + '/start')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.answer)
                    window.sessionStorage.setItem('answer', response.data.answer);
                    window.location.href = '/game';
                }
            })
    }

    render() {
        return (
            <div className="App container">
                <Jumbotron >
                    <h5>Choose a level!</h5>
                    <br/>
                    <p><Button onClick={this.easyGame} block>Easy</Button></p>
                    <p><Button onClick={this.normalGame} block>Normal</Button></p>
                </Jumbotron>
            </div >
        );
    }
}

export default Start;
