import React from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <Link
    to={`${props.linkName}`.toLowerCase()}
    onClick={() => props.clickHandler(props.linkName)}
    style={props.linkStyle}
  >
    {props.linkName}
  </Link>
);

module.exports = NavLink;
