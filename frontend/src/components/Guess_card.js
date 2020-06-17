import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { backend_host } from '../config';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Define a Guess_card Component
class Guess_card extends Component {
    //call the constructor method
    constructor(props) {
        super(props);

        this.state = {
            d1: "",
            d1Valid: "",
            d2: "",
            d2Valid: "",
            d3: "",
            d3Valid: "",
            d4: "",
            d4Valid: "",
            hint: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log([e.target.name] + ":" + e.target.value)
        if (0 <= e.target.value && e.target.value < 10) {
            switch (e.target.name) {
                case 'd1':
                    this.setState({ d1Valid: true });
                    break;
                case 'd2':
                    this.setState({ d2Valid: true });
                    break;
                case 'd3':
                    this.setState({ d3Valid: true });
                    break;
                case 'd4':
                    this.setState({ d4Valid: true });
                    break;
                default:
                    break;
            }
        } else {
            switch (e.target.name) {
                case 'd1':
                    this.setState({ d1Valid: false });
                    break;
                case 'd2':
                    this.setState({ d2Valid: false });
                    break;
                case 'd3':
                    this.setState({ d3Valid: false });
                    break;
                case 'd4':
                    this.setState({ d4Valid: false });
                    break;
                default:
                    break;
            }
        }
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.d1Valid === true && this.state.d2Valid === true
            && this.state.d3Valid === true && this.state.d4Valid === true) {
            this.setState({ hint: "" });
            var answer = window.sessionStorage.getItem('answer').split(',');
            var guess = [];
            guess.push(this.state.d1);
            guess.push(this.state.d2);
            guess.push(this.state.d3);
            guess.push(this.state.d4);
            const data = {
                answer: answer,
                guess: guess
            }
            console.log(data);
            axios.post(backend_host + '/checkAnswer', data)
                .then(response => {
                    console.log(response);
                    var attemps = [];
                    var guess = '';

                    if (response.data.result === 'true') {
                        window.location.href = '/congrats'
                    } else {
                        response.data.guess.forEach(element => {
                            guess += element;
                        });
                        var attemp = {
                            'guess': guess,
                            'feedback': response.data.result
                        }
                        attemps = attemps.concat(attemp)
                        console.log(attemp)
                        console.log(attemps)

                        if (window.sessionStorage.getItem("attemps") != null) {
                            var old_guesses = JSON.parse(window.sessionStorage.getItem("attemps"))
                            console.log(old_guesses)
                            attemps = attemps.concat(old_guesses)
                        }
                        window.sessionStorage.setItem("attemps", JSON.stringify(attemps));
                    }
                });
        } else {
            this.setState({ hint: "Please check your input" });
        }
    }

    render() {
        let input1 = (<input onChange={this.handleChange} name="d1" class="numInput"></input>)
        let input2 = (<input onChange={this.handleChange} name="d2" class="numInput"></input>)
        let input3 = (<input onChange={this.handleChange} name="d3" class="numInput"></input>)
        let input4 = (<input onChange={this.handleChange} name="d4" class="numInput"></input>)
        let hint = (<p style={{ color: "red" }}>{this.state.hint}</p>)
        if (this.state.d1Valid === false) {
            input1 = (<input onChange={this.handleChange} name="d1" class="numInputNotValid"></input>)
        }

        if (this.state.d2Valid === false) {
            input2 = (<input onChange={this.handleChange} name="d2" class="numInputNotValid"></input>)
        }

        if (this.state.d3Valid === false) {
            input3 = (<input onChange={this.handleChange} name="d3" class="numInputNotValid"></input>)
        }

        if (this.state.d4Valid === false) {
            input4 = (<input onChange={this.handleChange} name="d4" class="numInputNotValid"></input>)
        }

        return (
            <Card style={{ margin: "3% 2%" }}>
                <Card.Header as='h5'>Put your guess here</Card.Header>
                <Card.Body>
                    <Card.Title>Please put one digit number (ex. 0 - 9) in each text field.</Card.Title>
                    <Card.Text>
                        <form>
                            {input1}
                            {input2}
                            {input3}
                            {input4}
                        </form>
                        {hint}
                    </Card.Text>
                    <Button onClick={this.handleSubmit} variant="primary">Check your answer</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default Guess_card;
