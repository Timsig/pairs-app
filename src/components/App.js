import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      leaders: [
        {name: "Felix",
          goes: 40},
        {name: "Milo",
          goes: 45},
        {name: "Edith",
          goes: 47}
      ]
    };
  }

  addLeader(newArray) {
    this.setState({
      leaders: newArray
    });
  }
  render() {
    return (
      <app>
        <Switch>
          <Route exact path='/' component={Welcome} />
          {/* <Route path='/game' component={Board} leaders="foo" />    */}
          <Route path='/game' render={(props) => (
            <Board {...props} leaders='this.state.leaders' />
          )} />
          <Route path='/leaderboard' render={(props) => (
            <Leaderboard {...props} leaders={this.state.leaders} />
          )} />
          <Route path='/winner' component={Winner} />
        </Switch>
      </app>
    );
  }
}

export default App;
