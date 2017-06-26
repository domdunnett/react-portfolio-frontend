const borderSvg = require('../images/kennedyBorder.svg');

const styles = {
  domDunnettLogo: {
    marginLeft: '85px',
    marginTop: '35px',
  },
  activeLink: {
    cursor: 'default',
    textDecoration: 'underline',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    marginTop: '2em',
    marginLeft: '1.5em',
  },
  nonActiveLink: {
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    marginTop: '2em',
    marginLeft: '1.5em',
  },
  LanguageSelector: {
    marginTop: '2em',
    marginLeft: '1.5em',
  },
  contentLayer: {
    marginLeft: '85px',
    marginTop: '95px',
    fontFamily: 'sans-serif',
    listStyle: 'none',
  },
  bannerStyle: {
    backgroundImage: `url('${borderSvg}')`,
    backgroundSize: '1500px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '-60px',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  activeLanguage: {
    cursor: 'default',
    textDecoration: 'none',
    color: 'black',
    margin: '0 0.5em 0 0.5em',
  },
  nonActiveLanguage: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'black',
    margin: '0 0.5em 0 0.5em',
  },
};

module.exports = styles;
