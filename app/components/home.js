import React from 'react';
import Styles from '../styles/styles';

const Home = React.createClass({
  render: function() {
    return(<div style={Styles.contentLayer}>Hello from Home!</div>)
  }
});

module.exports = Home;
