import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Styles from '../styles/styles';

const getStyles = (isActive, device) => {
  const currentLinkStyles = {};
  if (isActive) {
    Object.assign(currentLinkStyles, Styles.activeLink, Styles.activeLink[device]);
  } else {
    Object.assign(currentLinkStyles, Styles.nonActiveLink, Styles.nonActiveLink[device]);
  }
  return currentLinkStyles;
};

const NavLink = props => (
  <Link
    to={`${props.linkName}`.toLowerCase()}
    onClick={() => props.clickHandler(props.linkName)}
    style={getStyles(props.isActive, props.device)}
  >
    {props.linkName}
  </Link>
);

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  device: PropTypes.string.isRequired,
};

module.exports = NavLink;
