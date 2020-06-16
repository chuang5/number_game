import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import { backend_host } from '../config';
import  Table  from 'react-bootstrap/Table';
//import Cookies from 'universal-cookie';

//Define a Guess_table Component
class Guess_table extends Component {
    //call the constructor method
    constructor(props) {
        super(props);
    }


    render() {
        var str = (window.sessionStorage.getItem('answer'));
        return (
            <Table striped bordered hover size="sm" style={{margin: "3% 2%", width: "96%"}}>
                <thead>
                    <tr>
                        <th>Guessed number</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{str}</td>
                        <td>1A1B</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}


export default Guess_table;
