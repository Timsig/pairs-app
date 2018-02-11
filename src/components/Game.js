import React from 'react';
import { withRouter, Switch, Route, } from 'react-router-dom';
import Welcome from './Welcome';
import Board from './Board';
import Leaderboard from './Leaderboard';
import Winner from './Winner';
import Gameover from './Gameover';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../css/App.css';

const Game = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="flipIt" timeout={1000}>
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
            </CSSTransition>
        </TransitionGroup>
    )
}

export default withRouter(Game);