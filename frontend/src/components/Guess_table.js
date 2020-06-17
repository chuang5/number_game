import React, { Component } from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
//import Cookies from 'universal-cookie';

//Define a Guess_table Component
class Guess_table extends Component {
    //call the constructor method
    constructor(props) {
        super(props);

        this.state = {
            attemps: [],
            level: window.sessionStorage.getItem('level')
        }
    }

    componentDidMount() {
        this.getData();
        console.log(this.state.attemps)

        setInterval(this.getData, 500);
    }

    getData = () => {
        this.setState({
            attemps: JSON.parse(window.sessionStorage.getItem('attemps'))
        })
    }

    render() {
        let str = null;
        if (this.state.level === 'normal') {
            if (this.state.attemps != null) {
                str = this.state.attemps.map(current => {
                    return (
                        <tr>
                            <td>{current.guess}</td>
                            <td>{current.feedback}</td>
                        </tr>
                    )
                })
            }
        } else if (this.state.level === 'easy'){
            if (this.state.attemps != null) {
                str = this.state.attemps.map(current => {
                    return (
                        <tr>
                            <td>{current.guess}</td>
                            <td>{current.feedback}</td>
                        </tr>
                    )
                })
            }
        }

        return (
            <Table striped bordered hover size="sm" style={{ margin: "3% 2%", width: "96%" }}>
                <thead>
                    <tr>
                        <th>Guessed number</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {str}
                </tbody>
            </Table>
        )
    }
}


export default Guess_table;
