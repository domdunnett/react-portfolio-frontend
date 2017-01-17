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
        <NavLink link={`https://github.com/${this.props.username}`} linkName="Home" />
        <NavLink linkName="About" />
        <NavLink linkName="Contact" />
      </div>
    )
  }
});

const NavLink = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.link);
  },
  render: function() {
    console.log(this.props);
    return(
      <span
        onClick={this.changeUrl}
        style={{color: 'blue', cursor: 'pointer', padding: '2em'}}>
        {this.props.linkName}
      </span>
    )
  }
});

ReactDOM.render(
  <NavBar username="domdunnett"/>,
  document.getElementById('app')
);
