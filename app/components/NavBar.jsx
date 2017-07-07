import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import NavLink from './NavLink';
import SmallLogo from './SmallLogo';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import Styles from '../styles/styles';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'Eng',
      link: {
        About: true,
        Tech: false,
        Contact: false,
      },
    };
    this.clickLink = this.clickLink.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
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

  changeLanguage(event) {
    event.preventDefault();
    this.setState({ language: event.target.innerText });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     child => React.cloneElement(child, {
       language: this.state.language,
     }),
    );

    return (
      <div style={Styles.bannerStyle}>
        <MediaQuery minWidth="1224px">
          <Logo />
        </MediaQuery>
        <MediaQuery maxWidth="1224px">
          <SmallLogo />
        </MediaQuery>
        <div style={{ marginLeft: '60px' }}>
          <NavLink
            linkName="About"
            clickHandler={this.clickLink}
            linkStyle={this.state.link.About ? Styles.activeLink : Styles.nonActiveLink}
          />
          <NavLink
            linkName="Tech"
            clickHandler={this.clickLink}
            linkStyle={this.state.link.Tech ? Styles.activeLink : Styles.nonActiveLink}
          />
          <NavLink
            linkName="Contact"
            clickHandler={this.clickLink}
            linkStyle={this.state.link.Contact ? Styles.activeLink : Styles.nonActiveLink}
          />
          <LanguageSelector
            changeLanguage={this.changeLanguage}
            currentLanguage={this.state.language}
          />
        </div>
        <div>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.instanceOf(NavLink).isRequired,
};

module.exports = NavBar;
