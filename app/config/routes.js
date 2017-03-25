import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import NavBar from '../components/NavBar';
import NavLink from '../components/NavLink';
import About from '../components/About';
import Tech from '../components/Tech';
import Contact from '../components/Contact';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={NavBar}>
      <Route path="/about" component={About} />
      <Route path="/tech" component={Tech} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);

module.exports = routes;
