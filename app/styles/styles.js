const borderSvg = require('../images/kennedyBorder.svg');

const styles = {
  activeLink: {
    padding: '5px 10px',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: 'black 0 1px 1px 0',
    color: 'black',
    margin: '1em 2em 2em 2em',
  },
  nonActiveLink: {
    padding: '5px 10px',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: 'black 0 2px 5px 0',
    color: 'black',
    margin: '1em 2em 2em 2em'
  },
  contentLayer: {
    marginLeft: '8em',
    marginTop: '3em',
  },
  bannerStyle: {
    backgroundImage: `url('${borderSvg}')`,
    backgroundSize: 'cover',
    height: '100vh'
  }
}

module.exports = styles;
