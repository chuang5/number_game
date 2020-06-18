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

        this.getData = this.getData.bind(this);
        this.renderResultOfFeedback = this.renderResultOfFeedback.bind(this);
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

    renderResultOfFeedback = (s, e) => {
        let r = null;
        if (e === 0) {
            r = <span class="feedback">{s}</span>
        } else if (e === 1) {
            r = <span class="feedback" style={{ backgroundColor: 'orange' }}>{s}</span>
        } else if (e === 2) {
            r = <span class="feedback" style={{ backgroundColor: '#5dbab7', color: 'white' }}>{s}</span>
        }
        return r;
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
        } else if (this.state.level === 'easy') {
            if (this.state.attemps != null) {
                str = this.state.attemps.map(current => {
                    let feed1 = this.renderResultOfFeedback(current.guess.substring(0, 1), current.feedback[0])
                    let feed2 = this.renderResultOfFeedback(current.guess.substring(1, 2), current.feedback[1])
                    let feed3 = this.renderResultOfFeedback(current.guess.substring(2, 3), current.feedback[2])
                    let feed4 = this.renderResultOfFeedback(current.guess.substring(3, 4), current.feedback[3])

                    // console.log(feed1)
                    return (
                        <tr>
                            <td>{current.guess}</td>
                            <td>{feed1}{feed2}{feed3}{feed4}</td>
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
