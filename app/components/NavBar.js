import React from 'react';
import NavLink from './NavLink';

const NavBar = React.createClass({
  render: function() {
    return(
      <div>
        <NavLink link={`https://github.com/`} linkName="Home" />
        <NavLink linkName="About" />
        <NavLink linkName="Contact" />
        {this.props.children}
      </div>
    )
  }
});

module.exports = NavBar;
