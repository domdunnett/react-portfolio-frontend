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

const NavBar = React.createClass({
  render: function() {
    return(
      <div>
        <NavLink changeUrl={this.props.changeUrl} linkName="Home" />
        <NavLink linkName="About" />
        <NavLink linkName="Contact" />
      </div>
    )
  }
});

const NavLink = React.createClass({
  render: function() {
    return(
      <span>
        <a href={`https://github.com/${this.props.changeUrl}`} style={{color: 'blue', cursor: 'pointer', padding: '2em'}}>{this.props.linkName}</a>
      </span>
    )
  }
});

ReactDOM.render(
  <NavBar changeUrl="domdunnett"/>,
  document.getElementById('app')
);
