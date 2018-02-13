import React from 'react';
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';
import Gameover from './Gameover';
import Game from './Game';
import base from '../base';
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom';

import '../css/App.css';

/****************************************For transitions***********/


class App extends React.Component {
  constructor() {
    super();
    this.setGameGoes = this.setGameGoes.bind(this);
    this.addLeader = this.addLeader.bind(this);
    
    
    this.state = {
      leaders: [],
      currentGameGoes: 0
    };
  }

  setGameGoes(goes) {
    this.setState({
      currentGameGoes: goes
    });
  }

  componentWillMount() {
    this.leadersRef = base.syncState('leaders', {
      context: this,
      state: 'leaders',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.leadersRef);
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
    
    /****************************************For transitions***********/
    // const locationKey = this.props.location.pathname;

    return (
        <CSSTransitionGroup
          key={this.props.location.key}
          transitionName="flipIt"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
        >
        <Switch key={this.props.location.pathname} location={this.props.location}>
            <Route exact path='/' component={Welcome} />
            <Route path='/game' render={(props) => (
              <Board {...props} leaders={this.state.leaders} logGameGoes={this.setGameGoes} />
            )} />
            <Route path='/leaderboard' render={(props) => (
              <Leaderboard {...props} leaders={this.state.leaders} syncLeaders={this.syncLeaders} />
            )} />
            <Route path='/winner' render={(props) => (
              <Winner {...props} addLeader={this.addLeader} />
            )} />
            <Route path='/gameover' render={(props) => (
              <Gameover {...props} goes={this.state.currentGameGoes} />
            )} />
          </Switch>
        </CSSTransitionGroup>
    );
  }
}

export default withRouter(App);

//https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a