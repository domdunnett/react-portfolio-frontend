import React, { PropTypes } from 'react';
import Styles from '../styles/styles';

const getLanguageStyles = (currentlanguage, language, device) => {
  if (currentlanguage === language) {
    return Styles.activeLanguage[device];
  }
  return Styles.nonActiveLanguage[device];
};

const LanguageSelector = props => (
  <div style={Styles.LanguageSelector[props.device]}>
    <a
      href=""
      style={getLanguageStyles(props.currentLanguage, 'Eng', props.device)}
      onClick={event => props.changeLanguage(event)}
    >Eng</a>
    |
    <a
      href=""
      style={getLanguageStyles(props.currentLanguage, '中文', props.device)}
      onClick={event => props.changeLanguage(event)}
    >中文</a>
  </div>
);

LanguageSelector.propTypes = {
  device: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string,
  changeLanguage: PropTypes.func.isRequired,
};

LanguageSelector.defaultProps = {
  currentLanguage: 'Eng',
};

export default LanguageSelector;
