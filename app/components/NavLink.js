import React from 'react';
import { Link } from 'react-router';

const NavLink = ({ linkName, clickHandler, linkStyle }) =>
  <Link to={`${linkName}`.toLowerCase()} onClick={() => clickHandler(linkName)} style={linkStyle}>{linkName}</Link>

module.exports = NavLink;
