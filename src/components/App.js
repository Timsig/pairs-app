import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.setGameGoes = this.setGameGoes.bind(this);
    this.addLeader = this.addLeader.bind(this);
    
    this.state = {
      leaders: [
        {name: "Felix",
          goes: 40},
        {name: "Milo",
          goes: 45},
        {name: "Edith",
          goes: 47}
      ],
      currentGameGoes: 0
    };
  }

setGameGoes(goes) {
  this.setState({
    currentGameGoes: goes
  });
}

//Add newbie into leaders array at correct point and set state.
addLeader(newLeader) {
  alert('Here ' + newLeader + this.state.currentGameGoes);
   
}

render() {
    
  return (
    
      <Switch>
        <Route exact path='/' component={Welcome} />
        {/* <Route path='/game' component={Board} leaders="foo" />    */}
        <Route path='/game' render={(props) => (
        <Board {...props} leaders='this.state.leaders' gameGoes={this.setGameGoes} />
        )} />
        <Route path='/leaderboard' render={(props) => (
          <Leaderboard {...props} leaders={this.state.leaders} />
        )} />
        <Route path='/winner' render={(props) => (
        <Winner {...props} addLeader={this.addLeader} />
      )} />
      </Switch>
        
      
    );
  }
}

export default App;
