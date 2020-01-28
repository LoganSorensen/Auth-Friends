import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import FriendsList from "./components/friends-list";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to="/protected">Friends List</Link>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path={['/', "/login"]} component={Login} />
      </Switch>
    </div>
  );
}

export default App;
