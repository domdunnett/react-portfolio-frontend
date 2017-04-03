const borderSvg = require('../images/kennedyBorder.svg');

const styles = {
  activeLink: {
    cursor: 'default',
    padding: '5px 10px',
    textDecoration: 'underline',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    marginTop: '2em',
    marginLeft: '1.5em',
  },
  nonActiveLink: {
    padding: '5px 10px',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    marginTop: '2em',
    marginLeft: '1.5em',
  },
  contentLayer: {
    marginLeft: '8em',
    marginTop: '4em',
    fontFamily: 'sans-serif',
    listStyle: 'none',
  },
  bannerStyle: {
    backgroundImage: `url('${borderSvg}')`,
    backgroundSize: 'cover',
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
