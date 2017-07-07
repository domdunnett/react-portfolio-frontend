import React, { PropTypes } from 'react';
import Styles from '../styles/styles';

const LanguageSelector = props => (
  <div style={Object.assign({}, Styles.LanguageSelector)}>
    <a
      href=""
      style={props.currentLanguage === 'Eng' ? Styles.activeLanguage : Styles.nonActiveLanguage}
      onClick={event => props.changeLanguage(event)}
    >Eng</a>
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
  currentLanguage: 'Eng',
};

export default LanguageSelector;
