import React from 'react';
import ReactRouter from 'react-router';
import Navbar from '../components/Navbar';
import NavLink from '../components/NavLink';
import Home from '../components/Home';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
  <Router>
    <Route path="/" component={NavBar}>
      <Route path="/home" component={Home}></Route>
    </Route>
  </Router>
);

module.exports = routes;
