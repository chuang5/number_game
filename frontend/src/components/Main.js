import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

//components
import Start from './Start';
import Game from './Game';
import Nav from './Nav';


class Main extends Component {
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
