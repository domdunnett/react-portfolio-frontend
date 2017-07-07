import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Styles from '../styles/styles';

const NavLink = props => (
  <Link
    to={`${props.linkName}`.toLowerCase()}
    onClick={() => props.clickHandler(props.linkName)}
    style={props.isActive ? Styles.activeLink : Styles.nonActiveLink}
  >
    {props.linkName}
  </Link>
);

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

module.exports = NavLink;
