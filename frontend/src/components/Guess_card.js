import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import { backend_host } from '../config';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import Cookies from 'universal-cookie';

//Define a Guess_card Component
class Guess_card extends Component {
    //call the constructor method
    constructor(props) {
        super(props);

        this.state = {
            d1: "",
            d2: "",
            d3: "",
            d4: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log([e.target.name] + ":" + e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            d1: this.state.d1,
            d2: this.state.d2,
            d3: this.state.d3,
            d4: this.state.d4,
        }
        console.log(data.d1, data.d2, data.d3, data.d4);
    }


    render() {
        return (
            <Card style={{ margin: "3% 2%" }}>
                <Card.Header as='h5'>Put your guess here</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <input onChange={this.handleChange} name="d1" class="numInput"></input>
                            <input onChange={this.handleChange} name="d2" class="numInput"></input>
                            <input onChange={this.handleChange} name="d3" class="numInput"></input>
                            <input onChange={this.handleChange} name="d4" class="numInput"></input>
                        </form>
                    </Card.Text>
                    <Button onClick={this.handleSubmit} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default Guess_card;
