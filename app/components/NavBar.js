import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import Styles from '../styles/styles';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        Home: true,
        About: false,
        Contact: false,
      }
    };
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink(clickedLinkName) {
    const currentLinkState = this.state.link;
    currentLinkState[clickedLinkName] = true;
    Object.keys(currentLinkState).forEach((link) => {
      if (link !== clickedLinkName) {
        currentLinkState[link] = false;
      }
    });
    this.setState({ link: currentLinkState });
  }

  render() {
    var DuckImage = require('../images/kennedyBorder.svg');

    var bannerStyle = {
        backgroundImage: 'url(' + DuckImage + ')',
        backgroundSize: 'cover',
        height: '100%'
    }

    return(
      <div style={bannerStyle}>
        <Logo />
        <div style={{ marginLeft: '6em' }}>
          <NavLink linkName="Home" clickHandler={this.clickLink} linkStyle={this.state.link.Home ? Styles.activeLink : Styles.nonActiveLink} />
          <NavLink linkName="About" clickHandler={this.clickLink} linkStyle={this.state.link.About ? Styles.activeLink : Styles.nonActiveLink} />
          <NavLink linkName="Contact" clickHandler={this.clickLink} linkStyle={this.state.link.Contact ? Styles.activeLink : Styles.nonActiveLink} />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
};

module.exports = NavBar;
