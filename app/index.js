/*
  React Components should be:
  --> F - ocussed
  --> I - ndependent
  --> R - eusable
  --> S - mall
  --> T - estable
*/

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);
