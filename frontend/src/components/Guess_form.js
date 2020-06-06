import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import { backend_host } from '../config';
import { Form } from 'react-bootstrap';
//import Cookies from 'universal-cookie';

//Define a Guess_form Component
class Guess_form extends Component {
    //call the constructor method
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
        )
    }
}


export default Guess_form;
