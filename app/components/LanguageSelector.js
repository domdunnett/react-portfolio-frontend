import React, { PropTypes } from 'react';
import Styles from '../styles/styles';

const LanguageSelector = props => (
  <div style={{ display: 'inline', float: 'right', marginTop: '2em' }}>
    <a
      href=""
      style={props.currentLanguage === 'English' ? Styles.activeLanguage : Styles.nonActiveLanguage}
      onClick={event => props.changeLanguage(event)}
    >English</a>
    |
    <a
      href=""
      style={props.currentLanguage === '中文' ? Styles.activeLanguage : Styles.nonActiveLanguage}
      onClick={event => props.changeLanguage(event)}
    >中文</a>
  </div>
);

LanguageSelector.propTypes = {
  currentLanguage: PropTypes.string,
  changeLanguage: PropTypes.func.isRequired,
};

LanguageSelector.defaultProps = {
  currentLanguage: 'English',
};

export default LanguageSelector;
