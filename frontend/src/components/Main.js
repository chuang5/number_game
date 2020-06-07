import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { backend_host } from '../config';
import '../App.css';

//components
import Start from './Start';
import Game from './Game';
import Nav from './Nav';
import Guess_card from './Guess_card';
import Guess_table from './Guess_table';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path="/" component={Nav} />
                <Switch>
                    <Route path="/start" component={Start} />
                    <Route path="/game" component={Game} />
                </Switch>
            </div>
        );
    }
}

export default Main;
