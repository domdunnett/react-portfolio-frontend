import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Tech from '../components/Tech';
import Contact from '../components/Contact';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={NavBar}>
      <IndexRedirect to="about" />
      <Route path="about" component={About} />
      <Route path="tech" component={Tech} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

module.exports = routes;
