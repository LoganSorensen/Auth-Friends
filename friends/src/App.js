import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/login';

function App() {
  return (
    <div className="App">
      Hello
      <Switch>
        {/* <Route exact path='/protected' component={} /> */}
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
