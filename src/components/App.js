import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Software from './Software';
import Music from './Music';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/software" />
        </Route>
        <Route path="/software" component={Software} />
        <Route path="/music" component={Music} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
