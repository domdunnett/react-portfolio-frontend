import React from 'react';
import NavLink from './NavLink';
import Styles from '../styles/styles'

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
    return(
      <div>
        <NavLink linkName="Home" clickHandler={this.clickLink} linkColor={{ paddingRight: '2em', color:  this.state.link.Home ? 'red' : 'blue' }} />
        <NavLink linkName="About" clickHandler={this.clickLink} linkColor={{ paddingRight: '2em', color:  this.state.link.About ? 'red' : 'blue' }} />
        <NavLink linkName="Contact" clickHandler={this.clickLink} linkColor={{ paddingRight: '2em', color:  this.state.link.Contact ? 'red' : 'blue' }} />
        {this.props.children}
      </div>
    )
  }
};

module.exports = NavBar;
