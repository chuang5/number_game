import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../App.css';
import axios from 'axios';
import { backend_host } from '../config';

//components


class Congrats extends Component {
    constructor(props) {
        super(props);

        this.handleBack = this.handleBack.bind(this);
    }

    handleBack = (e) => {
        e.preventDefault();
        window.sessionStorage.clear();
        window.location.href = '/'
    }

    render() {
        return (
            <div className="App container">
                <Jumbotron >
                    {/* <h1><strong style={{ color: 'red' }}>C</strong>
                        <strong style={{ color: 'orange' }}>O</strong>
                        <strong style={{ color: 'yellow' }}>N</strong>
                        <strong style={{ color: 'green' }}>G</strong>
                        <strong style={{ color: 'blue' }}>R</strong>
                        <strong style={{ color: 'indigo' }}>A</strong>
                        <strong style={{ color: 'violet' }}>T</strong>
                        <strong style={{ color: 'red' }}>S</strong>
                        <strong style={{ color: 'orange' }}>!</strong></h1> */}
                        <h1><strong>CONGRATS!</strong></h1>
                    <Button onClick={this.handleBack} variant="primary">Back</Button>
                </Jumbotron>
            </div >
        );
    }
}

export default Congrats;
