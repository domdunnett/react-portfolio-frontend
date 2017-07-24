const borderSvg = require('../images/kennedyBorder.svg');

const styles = {
  domDunnettLogo: {
    marginLeft: '85px',
    marginTop: '35px',
  },
  activeLink: {
    desktop: {
      cursor: 'default',
      textDecoration: 'underline',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '4px',
      color: 'black',
      marginTop: '2em',
      marginLeft: '1.5em',
    },
    mobile: {
      cursor: 'default',
      textDecoration: 'underline',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '4px',
      color: 'black',
      marginTop: '2em',
      marginLeft: '1.5em',
      fontSize: 'xx-large',
    },
  },
  nonActiveLink: {
    desktop: {
      textDecoration: 'none',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '4px',
      color: 'black',
      marginTop: '2em',
      marginLeft: '1.5em',
    },
    mobile: {
      textDecoration: 'none',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '4px',
      color: 'black',
      marginTop: '2em',
      marginLeft: '1.5em',
      fontSize: 'xx-large',
    },
  },
  LanguageSelector: {
    desktop: {
      marginTop: '1.8em',
      marginLeft: '1.5em',
      display: 'inline',
      float: 'right',
      fontFamily: 'Lato, sans-serif',
    },
    mobile: {
      marginTop: '1.8em',
      marginLeft: '1.8em',
      fontFamily: 'Lato, sans-serif',
    },
  },
  contentLayer: {
    desktop: {
      marginLeft: '85px',
      marginTop: '95px',
      fontFamily: 'Lato, sans-serif',
      listStyle: 'none',
    },
    mobile: {
      marginLeft: '105px',
      marginTop: '95px',
      fontFamily: 'Lato, sans-serif',
      listStyle: 'none',
      fontSize: 'xx-large',
    },
  },
  bannerStyle: {
    backgroundImage: `url('${borderSvg}')`,
    backgroundSize: '1500px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '-60px',
    height: '100vh',
    fontFamily: 'Lato, sans-serif',
  },
  activeLanguage: {
    desktop: {
      cursor: 'default',
      textDecoration: 'none',
      color: 'black',
      margin: '0 0.5em 0 0.5em',
    },
    mobile: {
      cursor: 'default',
      textDecoration: 'none',
      color: 'black',
      margin: '0 0.5em 0 0.5em',
      fontSize: 'xx-large',
    },
  },
  nonActiveLanguage: {
    desktop: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: 'black',
      margin: '0 0.5em 0 0.5em',
    },
    mobile: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: 'black',
      margin: '0 0.5em 0 0.5em',
      fontSize: 'xx-large',
    },
  },
  onePercentLogo: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '150px',
  },
};

module.exports = styles;
