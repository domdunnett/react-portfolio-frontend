import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import Styles from '../styles/styles';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        About: true,
        Tech: false,
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
    return(
      <div style={Styles.bannerStyle}>
        <Logo />
        <div style={{ marginLeft: '6em' }}>
          <NavLink linkName="About" clickHandler={this.clickLink} linkStyle={this.state.link.About ? Styles.activeLink : Styles.nonActiveLink} />
          <NavLink linkName="Tech" clickHandler={this.clickLink} linkStyle={this.state.link.Tech ? Styles.activeLink : Styles.nonActiveLink} />
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
