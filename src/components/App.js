import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Music from './Music';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/music" />
        </Route>
        <Route path="/software-development" />
        <Route path="/music" component={Music} />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </div>
  );
}
