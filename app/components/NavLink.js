import React from 'react';
import { Link } from 'react-router';

const NavLink = ({ linkName, clickHandler, linkColor }) =>
  <Link to={`${linkName}`.toLowerCase()} onClick={() => clickHandler(linkName)} style={linkColor}>{linkName}</Link>

module.exports = NavLink;
