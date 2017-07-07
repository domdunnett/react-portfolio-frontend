import React, { PropTypes } from 'react';
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

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  linkStyle: PropTypes.object.isRequired,
};

module.exports = NavLink;
