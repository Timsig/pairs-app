import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom'
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';
import Gameover from './Gameover';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.setGameGoes = this.setGameGoes.bind(this);
    this.addLeader = this.addLeader.bind(this);
    this.leaderPosition = this.leaderPosition.bind(this);
    
    this.state = {
      leaders: [
        {name: "Felix",
          goes: 3},
        {name: "Milo",
          goes: 4},
        {name: "Edith",
          goes: 5}
      ],
      currentGameGoes: 0
    };
  }

setGameGoes(goes) {
  this.setState({
    currentGameGoes: goes
  });
}

//Add newbie into leaders array 
addLeader(newName) {
  const newLeader = {
    name: newName,
    goes: this.state.currentGameGoes
  }
  let leaders = [...this.state.leaders];
  leaders.splice(this.leaderPosition(newLeader), 0, newLeader);
  leaders.length > 5 && leaders.pop();
  this.setState({
    leaders: leaders
  });
}

//Helper function to return index at which new leader should be added
leaderPosition(newLeader) {
  for (var i = 0; i < this.state.leaders.length; i += 1) {
    if (newLeader.goes < this.state.leaders[i].goes){
      return i;
    }
  }  
}

render() {  
  return (
      <Switch>
        <Route exact path='/' component={Welcome} />
        {/* <Route path='/game' component={Board} leaders="foo" />    */}
        <Route path='/game' render={(props) => (
        <Board {...props} leaders={this.state.leaders} logGameGoes={this.setGameGoes} />
        )} />
        <Route path='/leaderboard' render={(props) => (
          <Leaderboard {...props} leaders={this.state.leaders} />
        )} />
        <Route path='/winner' render={(props) => (
        <Winner {...props} addLeader={this.addLeader} />
      )} />
        <Route path='/gameover' render={(props) => (
        <Gameover {...props} goes={this.state.currentGameGoes} />
      )} />
      </Switch>
        
      
    );
  }
}

export default App;
