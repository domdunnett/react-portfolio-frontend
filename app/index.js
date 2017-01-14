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

const HelloWorld = React.createClass({
  render: function() {
    return(
      <div> Hello {this.props.name}! </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="Tessa"/>,
  document.getElementById('app')
);
