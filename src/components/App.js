import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Music from './Music';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Redirect root path to /music */}
        <Route exact path="/" redirectTo="/music" />
        <Route path="/software-development" />
        <Route path="/music" component={Music} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
