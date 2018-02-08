import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';
import Gameover from './Gameover';
import { CSSTransitionGroup } from 'react-transition-group';

import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.setGameGoes = this.setGameGoes.bind(this);
    this.addLeader = this.addLeader.bind(this);
    
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
  leaders.push(newLeader);
  leaders.sort(function(a, b){
    return a.goes - b.goes;
  });
  leaders.length > 5 && leaders.pop();
  this.setState({
    leaders: leaders
  });
}

render() {  
  return (
      <Switch>
      {/* <CSSTransitionGroup
        transitionName="flip"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      > */}
        <Route exact path='/' component={Welcome} />
      {/* </CSSTransitionGroup> */}
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

//https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a