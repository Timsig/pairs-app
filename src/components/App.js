import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome';
import Board from './Board';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <app>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/game' component={Board} />
          
        </Switch>
      </app>
    );
  }
}

export default App;
