import React from 'react';
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';
import Gameover from './Gameover';
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import '../css/App.css';

console.log('CSSTransition: ' + CSSTransitionGroup + 'transitionGroup: ' + TransitionGroup );

const Game = withRouter(({ location }) => (
    
        <TransitionGroup>
            <CSSTransitionGroup
                key={location.key}
                classNames='flipIt'
                timeout={1000}
            >
                <Switch>
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
        </TransitionGroup>
    ))


export default Game;