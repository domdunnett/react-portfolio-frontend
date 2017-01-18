import React from 'react';

const NavLink = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.link);
  },
  render: function() {
    console.log(this.props);
    return(
      <span
        onClick={this.changeUrl}
        style={{color: 'blue', cursor: 'pointer', padding: '2em'}}>
        {this.props.linkName}
      </span>
    )
  }
});

module.exports = NavLink;
